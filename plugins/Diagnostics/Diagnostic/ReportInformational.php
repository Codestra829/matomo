<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\Plugins\Diagnostics\Diagnostic;

use Piwik\ArchiveProcessor\Rules;
use Piwik\Common;
use Piwik\CronArchive;
use Piwik\Date;
use Piwik\Db;
use Piwik\Development;
use Piwik\Option;
use Piwik\Plugin\Manager;
use Piwik\SettingsPiwik;
use Piwik\Translation\Translator;

/**
 * Informatation about Matomo reports eg tracking or archiving related
 */
class ReportInformational implements Diagnostic
{
    /**
     * @var Translator
     */
    private $translator;

    public function __construct(Translator $translator)
    {
        $this->translator = $translator;
    }

    public function execute()
    {
        $results = [];

        if (SettingsPiwik::isMatomoInstalled()) {
            $results[] = DiagnosticResult::informationalResult('Had visits in last 1 day', $this->hadVisitsInLastDays(1));
            $results[] = DiagnosticResult::informationalResult('Had visits in last 3 days', $this->hadVisitsInLastDays(3));
            $results[] = DiagnosticResult::informationalResult('Had visits in last 5 days', $this->hadVisitsInLastDays(5));
            $results[] = DiagnosticResult::informationalResult('Archive Time Last Started', Option::get(CronArchive::OPTION_ARCHIVING_STARTED_TS));
            $results[] = DiagnosticResult::informationalResult('Archive Time Last Finished', Option::get(CronArchive::OPTION_ARCHIVING_FINISHED_TS));
        }

        return $results;
    }

    private function hadVisitsInLastDays($numDays)
    {
        $table = Common::prefixTable('log_visit');
        $time = Date::now()->subDay($numDays)->getDatetime();

        try {
            $row = Db::fetchOne('SELECT count(idsite) from ' . $table . ' where visit_last_action_time > ? LIMIT 1', $time );
        } catch ( \Exception $e ) {
            $row = null;
        }

        if (!empty($row)) {
            return '1';
        }
        return '0';
    }

}
