<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

namespace Piwik\Tests\Integration;

use Piwik\Archive;
use Piwik\ArchiveProcessor\Parameters;
use Piwik\ArchiveProcessor\Rules;
use Piwik\Common;
use Piwik\Config;
use Piwik\CronArchive;
use Piwik\DataAccess\ArchiveWriter;
use Piwik\Date;
use Piwik\Db;
use Piwik\Period\Factory;
use Piwik\Plugins\VisitsSummary\API;
use Piwik\Segment;
use Piwik\Site;
use Piwik\Tests\Framework\Fixture;
use Piwik\Tests\Framework\TestCase\IntegrationTestCase;

class ArchiveTest extends IntegrationTestCase
{
    public function setUp(): void
    {
        parent::setUp();

        Fixture::createWebsite('2014-05-06');
    }

    public function test_pluginSpecificArchiveUsed_EvenIfAllArchiveExists_IfThereAreNoDataInAllArchive()
    {
        $idSite = 1;

        // insert all plugin archive
        $params = new Parameters(new Site($idSite), Factory::build('day', '2014-05-07'), new Segment('', [$idSite]));
        $archiveWriter = new ArchiveWriter($params);
        $archiveWriter->initNewArchive();
        $archiveWriter->insertRecord('ExamplePlugin_archive1metric', 1);
        $archiveWriter->insertRecord('ExamplePlugin_archive2metric', 5);
        $archiveWriter->finalizeArchive();

        sleep(1);

        // insert single plugin archive
        $_GET['pluginOnly'] = 1;
        $_GET['trigger'] = 'archivephp';

        $params = new Parameters(new Site($idSite), Factory::build('day', '2014-05-07'), new Segment('', [$idSite]));
        $params->setRequestedPlugin('ExamplePlugin');
        $params->onlyArchiveRequestedPlugin();
        $params->setIsPartialArchive(true);
        $archiveWriter = new ArchiveWriter($params);
        $archiveWriter->initNewArchive();
        $archiveWriter->insertRecord('ExamplePlugin_archive2metric', 2);
        $archiveWriter->insertRecord('ExamplePlugin_archive3metric', 3);
        $archiveWriter->finalizeArchive();

        sleep(1);

        // insert single plugin archive
        $params = new Parameters(new Site($idSite), Factory::build('day', '2014-05-07'), new Segment('', [$idSite]));
        $params->setRequestedPlugin('ExamplePlugin');
        $params->onlyArchiveRequestedPlugin();
        $params->setIsPartialArchive(true);
        $archiveWriter = new ArchiveWriter($params);
        $archiveWriter->initNewArchive();
        $archiveWriter->insertRecord('ExamplePlugin_archive3metric', 7);
        $archiveWriter->finalizeArchive();

        unset($_GET['trigger']);
        unset($_GET['pluginOnly']);

        $archive = Archive::build($idSite, 'day', '2014-05-07');
        $metrics = $archive->getNumeric(['ExamplePlugin_archive1metric', 'ExamplePlugin_archive2metric', 'ExamplePlugin_archive3metric']);

        $expected = [
            'ExamplePlugin_archive1metric' => 1,
            'ExamplePlugin_archive2metric' => 2,
            'ExamplePlugin_archive3metric' => 7,
        ];

        $this->assertEquals($expected, $metrics);
    }

    public function test_pluginSpecificArchiveUsed_EvenIfAllArchiveExists_IfThereAreNoDataInAllArchive_WithBrowserArchivingDisabled()
    {
        self::$fixture->getTestEnvironment()->overrideConfig('General', 'enable_browser_archiving_triggering', 0);
        self::$fixture->getTestEnvironment()->overrideConfig('General', 'archiving_range_force_on_browser_request', 0);
        self::$fixture->getTestEnvironment()->save();

        Config::getInstance()->General['enable_browser_archiving_triggering'] = 0;
        Config::getInstance()->General['archiving_range_force_on_browser_request'] = 0;

        $this->assertTrue(Rules::isArchivingDisabledFor([1], new Segment('', [1]), 'day'));

        $this->test_pluginSpecificArchiveUsed_EvenIfAllArchiveExists_IfThereAreNoDataInAllArchive();
    }

    public function test_archivingInvalidRange_doesNotReprocessInvalidDay()
    {
        $idSite = 1;

        self::$fixture->getTestEnvironment()->overrideConfig('General', 'browser_archiving_disabled_enforce', 0);
        self::$fixture->getTestEnvironment()->overrideConfig('General', 'archiving_range_force_on_browser_request', 1);
        self::$fixture->getTestEnvironment()->save();

        Config::getInstance()->General['browser_archiving_disabled_enforce'] = 0;
        Config::getInstance()->General['archiving_range_force_on_browser_request'] = 1;

        // track some visits
        $t = Fixture::getTracker($idSite, '2020-03-04 05:05:05');
        $t->setUrl('http://abc.com/mypage');
        Fixture::checkResponse($t->doTrackPageView('page title'));

        $t->setForceVisitDateTime('2020-03-05 06:06:06');
        $t->setUrl('http://abc.com/myotherpage');
        Fixture::checkResponse($t->doTrackPageView('another page'));

        // clear invalidations from above tracking
        $cronArchive = new CronArchive();
        $cronArchive->init();
        $cronArchive->invalidateArchivedReportsForSitesThatNeedToBeArchivedAgain(1);

        // archive range and day
        Rules::setBrowserTriggerArchiving(true);
        API::getInstance()->get(1, 'range', '2020-03-04,2020-03-05');

        // check expected archives were created
        $archives = Db::fetchAll("SELECT date1, date2, name, value FROM " . Common::prefixTable('archive_numeric_2020_03')
            . " WHERE `name` IN ('done', 'done.VisitsSummary')");
        $expected = [
            ['date1' => '2020-03-04', 'date2' => '2020-03-05', 'name' => 'done.VisitsSummary', 'value' => '1'],
            ['date1' => '2020-03-04', 'date2' => '2020-03-04', 'name' => 'done', 'value' => '1'],
            ['date1' => '2020-03-05', 'date2' => '2020-03-05', 'name' => 'done', 'value' => '1'],
        ];
        $this->assertEquals($expected, $archives);

        // update ts_archived of archives so invalidating will work
        Db::query("UPDATE " . Common::prefixTable('archive_numeric_2020_03') . " SET ts_archived = ?", [Date::now()->subHour(2)->getDatetime()]);

        // track a visit and invalidate a day in the range
        $t->setIp('50.123.45.67');
        $t->setForceVisitDateTime('2020-03-05 06:06:06');
        $t->setUrl('http://abc.com/myotherpage');
        Fixture::checkResponse($t->doTrackPageView('my other page'));

        $cronArchive = new CronArchive();
        $cronArchive->init();
        $cronArchive->invalidateArchivedReportsForSitesThatNeedToBeArchivedAgain(1);

        // check correct archives are invalidated
        $archives = Db::fetchAll("SELECT date1, date2, name, value FROM " . Common::prefixTable('archive_numeric_2020_03')
            . " WHERE `name` IN ('done', 'done.VisitsSummary')");
        $expected = [
            ['date1' => '2020-03-04', 'date2' => '2020-03-05', 'name' => 'done.VisitsSummary', 'value' => '4'],
            ['date1' => '2020-03-04', 'date2' => '2020-03-04', 'name' => 'done', 'value' => '1'],
            ['date1' => '2020-03-05', 'date2' => '2020-03-05', 'name' => 'done', 'value' => '4'],
        ];
        $this->assertEquals($expected, $archives);

        // archive range again
        Rules::setBrowserTriggerArchiving(false);
        API::getInstance()->get(1, 'range', '2020-03-04,2020-03-05');

        // check that range was rearchived
        $archives = Db::fetchAll("SELECT idarchive, date1, date2, name, value FROM " . Common::prefixTable('archive_numeric_2020_03')
            . " WHERE `name` IN ('done', 'done.VisitsSummary')");
        $expected = [
            ['idarchive' => '2', 'date1' => '2020-03-04', 'date2' => '2020-03-04', 'name' => 'done', 'value' => '1'],
            ['idarchive' => '7', 'date1' => '2020-03-05', 'date2' => '2020-03-05', 'name' => 'done', 'value' => '4'],
            ['idarchive' => '12', 'date1' => '2020-03-04', 'date2' => '2020-03-05', 'name' => 'done.VisitsSummary', 'value' => '1'],
        ];
        $this->assertEquals($expected, $archives);

        // rearchive day and check range does not rearchive
        Rules::setBrowserTriggerArchiving(true);
        API::getInstance()->get(1, 'day', '2020-03-05');
        Rules::setBrowserTriggerArchiving(false);
        API::getInstance()->get(1, 'range', '2020-03-04,2020-03-05');

        $archives = Db::fetchAll("SELECT idarchive, date1, date2, name, value FROM " . Common::prefixTable('archive_numeric_2020_03')
            . " WHERE `name` IN ('done', 'done.VisitsSummary')");
        $expected = [
            ['idarchive' => '2', 'date1' => '2020-03-04', 'date2' => '2020-03-04', 'name' => 'done', 'value' => '1'],
            ['idarchive' => '12', 'date1' => '2020-03-04', 'date2' => '2020-03-05', 'name' => 'done.VisitsSummary', 'value' => '1'],
            ['idarchive' => '13', 'date1' => '2020-03-05', 'date2' => '2020-03-05', 'name' => 'done', 'value' => '1'],
        ];
        $this->assertEquals($expected, $archives);

        // update range archive ts_archived to be beyond and check that range was rearchived
        Db::query("UPDATE " . Common::prefixTable('archive_numeric_2020_03') . " SET ts_archived = ? WHERE period = 5", [Date::now()->subHour(2)->getDatetime()]);
        API::getInstance()->get(1, 'range', '2020-03-04,2020-03-05');

        $archives = Db::fetchAll("SELECT idarchive, date1, date2, name, value FROM " . Common::prefixTable('archive_numeric_2020_03')
            . " WHERE `name` IN ('done', 'done.VisitsSummary')");
        $expected = [
            ['idarchive' => '2', 'date1' => '2020-03-04', 'date2' => '2020-03-04', 'name' => 'done', 'value' => '1'],
            ['idarchive' => '13', 'date1' => '2020-03-05', 'date2' => '2020-03-05', 'name' => 'done', 'value' => '1'],
            ['idarchive' => '16', 'date1' => '2020-03-04', 'date2' => '2020-03-05', 'name' => 'done.VisitsSummary', 'value' => '1'],
        ];
        $this->assertEquals($expected, $archives);
    }

    public function test_archivingInvalidWeekWithSegment_doesReprocessInvalidDayWIthSegment()
    {
        $idSite = 1;

        $segment = 'browserCode==FF';
        $segmentHash = md5($segment);

        self::$fixture->getTestEnvironment()->overrideConfig('General', 'browser_archiving_disabled_enforce', 0);
        self::$fixture->getTestEnvironment()->overrideConfig('General', 'archiving_range_force_on_browser_request', 1);
        self::$fixture->getTestEnvironment()->save();

        Config::getInstance()->General['browser_archiving_disabled_enforce'] = 0;
        Config::getInstance()->General['archiving_range_force_on_browser_request'] = 1;

        // track some visits
        $t = Fixture::getTracker($idSite, '2020-03-04 05:05:05');
        $t->setUrl('http://abc.com/mypage');
        Fixture::checkResponse($t->doTrackPageView('page title'));

        $t->setForceVisitDateTime('2020-03-05 06:06:06');
        $t->setUrl('http://abc.com/myotherpage');
        Fixture::checkResponse($t->doTrackPageView('another page'));

        // clear invalidations from above tracking
        $cronArchive = new CronArchive();
        $cronArchive->init();
        $cronArchive->invalidateArchivedReportsForSitesThatNeedToBeArchivedAgain(1);

        // archive week and day
        Rules::setBrowserTriggerArchiving(true);
        API::getInstance()->get(1, 'week', '2020-03-04', $segment);

        // check expected archives were created
        $archives = Db::fetchAll("SELECT date1, date2, name, value FROM " . Common::prefixTable('archive_numeric_2020_03')
            . " WHERE `name` = 'done$segmentHash.VisitsSummary'");
        $expected = [
            ['date1' => '2020-03-02', 'date2' => '2020-03-08', 'name' => 'done' . $segmentHash . '.VisitsSummary', 'value' => '1'],
            ['date1' => '2020-03-04', 'date2' => '2020-03-04', 'name' => 'done' . $segmentHash . '.VisitsSummary', 'value' => '1'],
            ['date1' => '2020-03-05', 'date2' => '2020-03-05', 'name' => 'done' . $segmentHash . '.VisitsSummary', 'value' => '1'],
        ];
        $this->assertEquals($expected, $archives);

        // update ts_archived of archives so invalidating will work
        Db::query("UPDATE " . Common::prefixTable('archive_numeric_2020_03') . " SET ts_archived = ?", [Date::now()->subHour(2)->getDatetime()]);

        // track a visit and invalidate a day in the week
        $t->setIp('50.123.45.67');
        $t->setForceVisitDateTime('2020-03-05 06:06:06');
        $t->setUrl('http://abc.com/myotherpage');
        Fixture::checkResponse($t->doTrackPageView('my other page'));

        $cronArchive->invalidateArchivedReportsForSitesThatNeedToBeArchivedAgain(1);

        // check correct archives are invalidated
        $archives = Db::fetchAll("SELECT date1, date2, name, value FROM " . Common::prefixTable('archive_numeric_2020_03')
            . " WHERE `name` = 'done$segmentHash.VisitsSummary'");
        $expected = [
            ['date1' => '2020-03-02', 'date2' => '2020-03-08', 'name' => 'done' . $segmentHash . '.VisitsSummary', 'value' => '4'],
            ['date1' => '2020-03-04', 'date2' => '2020-03-04', 'name' => 'done' . $segmentHash . '.VisitsSummary', 'value' => '1'],
            ['date1' => '2020-03-05', 'date2' => '2020-03-05', 'name' => 'done' . $segmentHash . '.VisitsSummary', 'value' => '4'],
        ];
        $this->assertEquals($expected, $archives);

        // archive segment again
        Rules::setBrowserTriggerArchiving(false);
        API::getInstance()->get(1, 'week', '2020-03-04,2020-03-05', $segment);

        // check that segment was rearchived, because day was allowed to be rearchived
        $archives = Db::fetchAll("SELECT date1, date2, name, value FROM " . Common::prefixTable('archive_numeric_2020_03')
            . " WHERE `name` = 'done$segmentHash.VisitsSummary'");
        $expected = [
            ['date1' => '2020-03-04', 'date2' => '2020-03-04', 'name' => 'done' . $segmentHash . '.VisitsSummary', 'value' => '1'],
            ['date1' => '2020-03-02', 'date2' => '2020-03-08', 'name' => 'done' . $segmentHash . '.VisitsSummary', 'value' => '1'],
            ['date1' => '2020-03-05', 'date2' => '2020-03-05', 'name' => 'done' . $segmentHash . '.VisitsSummary', 'value' => '1'],
        ];
        $this->assertEquals($expected, $archives);
    }

    protected static function configureFixture($fixture)
    {
        parent::configureFixture($fixture); // TODO: document in t
        $fixture->createSuperUser = true;
    }
}