<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link    http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\Tests\Integration\Archive;

use Piwik\Archive\ArchivePurger;
use Piwik\Config;
use Piwik\Date;
use Piwik\Db;
use Piwik\Tests\Fixtures\RawArchiveDataWithTempAndInvalidated;
use Piwik\Tests\Framework\Fixture;
use Piwik\Tests\Framework\TestCase\IntegrationTestCase;

/**
 * @group ArchivePurgerTest
 * @group Core
 */
class ArchivePurgerTest extends IntegrationTestCase
{
    /**
     * @var RawArchiveDataWithTempAndInvalidated
     */
    public static $fixture;

    /**
     * @var ArchivePurger
     */
    private $archivePurger;

    /**
     * @var Date
     */
    private $january;

    /**
     * @var Date
     */
    private $february;

    public function setUp()
    {
        parent::setUp();

        $this->january = self::$fixture->january;
        $this->february = self::$fixture->february;

        $this->archivePurger = new ArchivePurger();
        $this->archivePurger->setTodayDate(Date::factory('2015-02-27'));
        $this->archivePurger->setYesterdayDate(Date::factory('2015-02-26'));
        $this->archivePurger->setNow(Date::factory('2015-02-27 08:00:00')->getTimestamp());

        $this->configureCustomRangePurging();

        // assert test data was added correctly
        self::$fixture->assertInvalidatedArchivesNotPurged(self::$fixture->january);
        self::$fixture->assertInvalidatedArchivesNotPurged(self::$fixture->february);
    }

    public function test_purgeOutdatedArchives_PurgesCorrectTemporaryArchives_WhileKeepingNewerTemporaryArchives_WithBrowserTriggeringEnabled()
    {
        $this->enableBrowserTriggeredArchiving();

        $deletedRowCount = $this->archivePurger->purgeOutdatedArchives($this->february);

        self::$fixture->assertTemporaryArchivesPurged($browserTriggeringEnabled = true, $this->february);

        self::$fixture->assertCustomRangesNotPurged($this->february, $includeTemporary = false);
        self::$fixture->assertTemporaryArchivesNotPurged($this->january);

        $this->assertEquals(7 * RawArchiveDataWithTempAndInvalidated::ROWS_PER_ARCHIVE, $deletedRowCount);
    }

    public function test_purgeOutdatedArchives_PurgesCorrectTemporaryArchives_WhileKeepingNewerTemporaryArchives_WithBrowserTriggeringDisabled()
    {
        $this->disableBrowserTriggeredArchiving();

        $deletedRowCount = $this->archivePurger->purgeOutdatedArchives($this->february);

        self::$fixture->assertTemporaryArchivesPurged($browserTriggeringEnabled = false, $this->february);

        self::$fixture->assertCustomRangesNotPurged($this->february);
        self::$fixture->assertTemporaryArchivesNotPurged($this->january);

        $this->assertEquals(5 * RawArchiveDataWithTempAndInvalidated::ROWS_PER_ARCHIVE, $deletedRowCount);
    }

    public function test_purgeInvalidatedArchivesFrom_PurgesAllInvalidatedArchives_AndMarksDatesAndSitesAsInvalidated()
    {
        $deletedRowCount = $this->archivePurger->purgeInvalidatedArchivesFrom($this->february);

        self::$fixture->assertInvalidatedArchivesPurged($this->february);
        self::$fixture->assertInvalidatedArchivesNotPurged($this->january);

        $this->assertEquals(4 * RawArchiveDataWithTempAndInvalidated::ROWS_PER_ARCHIVE, $deletedRowCount);
    }

    public function test_purgeArchivesWithPeriodRange_PurgesAllRangeArchives()
    {
        $deletedRowCount = $this->archivePurger->purgeArchivesWithPeriodRange($this->february);

        self::$fixture->assertCustomRangesPurged($this->february);
        self::$fixture->assertCustomRangesNotPurged($this->january);

        $this->assertEquals(3 * RawArchiveDataWithTempAndInvalidated::ROWS_PER_ARCHIVE, $deletedRowCount);
    }

    public function test_purgeNoSiteArchives_PurgesAllNoSiteArchives()
    {
        //Create two websites (IDs #1 and #2). Existing rows for website #3 will be invalid.
        Fixture::createWebsite($this->january);
        Fixture::createWebsite($this->january);

        //There are 5 rows for website #3. We leave the other two because they're before our purge threshold.
        $deletedRowCount = $this->archivePurger->purgeDeletedSiteArchives($this->january);
        $this->assertEquals(3 * RawArchiveDataWithTempAndInvalidated::ROWS_PER_ARCHIVE, $deletedRowCount);
        self::$fixture->assertArchivesDoNotExist(array(3, 7, 10), $this->january);
    }

    public function test_purgeNoSegmentArchives_PurgesSegmentForAppropriateSitesOnly()
    {
        //Extra data set with segment and plugin archives
        self::$fixture->insertSegmentArchives($this->january);

        $validSegmentIds = array(
            0 => ['DUMMYHASHSTR'],          //valid for all sites
            1 => ['abcd1234abcd5678'],      //valid for site 1. should be ignored for site 2
            2 => ['hashthatdontexist', 'hash1', 'hash2']
        );

        //Archive #29 also has a deleted segment but it's before the purge threshold so it stays for now.
        $deletedRowCount = $this->archivePurger->purgeDeletedSegmentArchives($this->january, $validSegmentIds);
        $this->assertEquals(4 * RawArchiveDataWithTempAndInvalidated::ROWS_PER_ARCHIVE, $deletedRowCount);
        self::$fixture->assertArchivesDoNotExist(array(22, 23, 24, 28), $this->january);
    }

    private function configureCustomRangePurging()
    {
        Config::getInstance()->General['purge_date_range_archives_after_X_days'] = 3;
    }

    private function enableBrowserTriggeredArchiving()
    {
        Config::getInstance()->General['enable_browser_archiving_triggering'] = 1;
    }

    private function disableBrowserTriggeredArchiving()
    {
        Config::getInstance()->General['enable_browser_archiving_triggering'] = 0;
    }
}

ArchivePurgerTest::$fixture = new RawArchiveDataWithTempAndInvalidated();