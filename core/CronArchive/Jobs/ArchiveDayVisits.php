<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\CronArchive\Jobs;

use Piwik\CronArchive;
use Piwik\CronArchive\AlgorithmOptions;
use Piwik\CronArchive\AlgorithmRules;
use Piwik\CronArchive\BaseJob;
use Piwik\DataAccess\InvalidatedReports;
use Piwik\Option;
use Piwik\Piwik;

/**
 * Job that handles archiving for one day. When archiving is finished, archiving jobs for
 * periods and segments are queued.
 *
 * Will execute appropriate CronArchive hooks as well.
 */
class ArchiveDayVisits extends BaseJob
{
    /**
     * Constructor.
     */
    public function __construct($idSite, $date, AlgorithmOptions $options)
    {
        parent::__construct($idSite, $date, 'day', $segment = false, $options);
    }

    /**
     * Executes before the job starts.
     */
    public function jobStarting()
    {
        parent::jobStarting();

        list($idSite, $date, $period, $segment) = $this->parseJobUrl();

        /**
         * This event is triggered before the cron archiving process starts archiving data for a single
         * site.
         *
         * @param int $idSite The ID of the site we're archiving data for.
         * @deprecated
         */
        Piwik::postEvent('CronArchive.archiveSingleSite.start', array($idSite));
    }

    /**
     * Executes after the job finishes.
     */
    public function jobFinished($response)
    {
        parent::jobFinished($response);

        $context = $this->makeCronArchiveContext();

        list($idSite, $date, $period, $segment) = $this->parseJobUrl();
        list($visits, $visitsLast) = $this->parseVisitsApiResponse($context, $response, $idSite);

        // TODO: this seems incorrect, but I'm not sure what correct behavior is. if data has been invalidated, is it invalidated
        //       for all periods? then we should wait until all are done. what if only some finish successfully? still invalidated?
        if ($context->getAlgorithmRules()->isOldReportDataInvalidatedForWebsite($idSite)) {
            $this->removeWebsiteFromInvalidatedWebsites($idSite);
        }

        if ($visits === null) {
            $this->handleError($context, "Empty or invalid response '$response' for website id $idSite, skipping period and segment archiving.\n"
                . "(URL used: {$this->getUrlString()})");
            return;
        }

        $shouldArchivePeriods = $context->getAlgorithmRules()->getShouldArchivePeriodsForWebsite($idSite);

        // If there is no visit today and we don't need to process this website, we can skip remaining archives
        if ($visits == 0
            && !$shouldArchivePeriods
        ) {
            $context->executeHook('onSkipWebsitePeriodArchiving', array($idSite, 'no visits today'));
            return;
        }

        if ($visitsLast == 0
            && !$shouldArchivePeriods
            && $this->cronArchiveOptions->shouldArchiveAllSites
        ) {
            $context->executeHook('onSkipWebsitePeriodArchiving', array($idSite, "no visits in the last $date days"));
            return;
        }

        if (!$shouldArchivePeriods) {
            $reason = "was archived " . $context->getAlgorithmRules()->getElapsedTimeSinceLastArchiving($idSite, $pretty = true) . " ago";
            $context->executeHook('onSkipWebsitePeriodArchiving', array($idSite, $reason));

            return;
        }

        // mark 'day' period as successfully archived
        Option::set(AlgorithmRules::lastRunKey($idSite, "day"), time());

        $context->queuePeriodAndSegmentArchivingFor($idSite);

        $this->archivingRequestFinished($context, $idSite, $visits, $visitsLast);
    }

    /**
     * @param $idSite
     */
    private function removeWebsiteFromInvalidatedWebsites($idSite)
    {
        $invalidatedWebsites = new InvalidatedReports();
        $invalidatedWebsites->storeSiteIsReprocessed($idSite);
    }
}