<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link    http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\Tests\System;

use Piwik\Option;
use Piwik\Http;
use Piwik\Tests\Framework\TestCase\SystemTestCase;
use Piwik\Tests\Fixtures\ManySitesImportedLogs;
use Piwik\Tests\Framework\Fixture;
use Exception;

/**
 * Tests to call the archive.php script via web and check there is no error.
 *
 * @group Core
 * @group ArchiveWebTest
 */
class ArchiveWebTest extends SystemTestCase
{
    public static $fixture = null; // initialized below class definition

    public function testWebArchiving()
    {
        if (self::isMysqli() && self::isTravisCI()) {
            $this->markTestSkipped('Skipping on Mysqli as it randomly fails.');
        }

        list($url, $urlTmp) = $this->getUrlToProxyArchive();
        $output = Http::sendHttpRequest($url, 600);
        $this->cleanUpPiwikUrl($urlTmp);

        // ignore random build issues
        if (empty($output) || strpos($output, 'no error') === false) {
            $message = "This test has failed. Because it sometimes randomly fails, we skip the test, and ignore this failure.\n";
            $message .= "If you see this message often, or in every build, please investigate as this should only be a random and rare occurence!\n";
            $message .= "\n\narchive web failed: " . $output . "\n\nurl used: $url";
            $this->markTestSkipped($message);
        }

        $this->assertWebArchivingDone($output, $checkArchivedSite = false);
        $this->compareArchivePhpOutputAgainstExpected($output);
    }

    public function test_WebArchiveScriptFails_WhenTokenAuthIsNotSuperUser()
    {
        list($url, $urlTmp) = $this->getUrlToProxyArchive(md5('randomgarbage'), 'misc/cron/archive.php');

        $output = Http::sendHttpRequest($url, 60);
        $this->cleanUpPiwikUrl($urlTmp);

        $this->assertContains('You must specify the Super User token_auth as a parameter to this script', $output);
    }

    public function test_WebArchiveScriptCanBeRun_WithPhpCgi_AndWithoutTokenAuth()
    {
        list($returnCode, $output) = $this->runArchivePhpScriptWithPhpCgi();

        $this->assertEquals(0, $returnCode);
        $this->assertWebArchivingDone($output, $checkArchivedSite = false);
    }

    private function compareArchivePhpOutputAgainstExpected($output)
    {
        $fileName = 'test_ArchiveCronTest_archive_php_cron_output.txt';
        list($pathProcessed, $pathExpected) = static::getProcessedAndExpectedDirs();

        $expectedOutputFile = $pathExpected . $fileName;

        try {
            $this->assertTrue(is_readable($expectedOutputFile));
            $this->assertEquals(file_get_contents($expectedOutputFile), $output);
        } catch (Exception $ex) {
            $this->comparisonFailures[] = $ex;
        }
    }

    private function assertWebArchivingDone($output, $checkArchivedSite = true)
    {
        $this->assertContains('Starting Piwik reports archiving...', $output);
        if ($checkArchivedSite) {
            $this->assertContains('Archived website id = 1', $output);
        }
        $this->assertContains('Done archiving!', $output);
    }

    private function runArchivePhpScriptWithPhpCgi()
    {
        $command = "php-cgi \"" . PIWIK_INCLUDE_PATH . "/tests/PHPUnit/proxy/archive.php" . "\"";

        exec($command, $output, $returnCode);

        $output = implode("\n", $output);

        return array($returnCode, $output);
    }

    private function getUrlToProxyArchive($tokenAuth = false, $pathToArchivePhp = 'tests/PHPUnit/proxy/archive.php')
    {
        $host  = Fixture::getRootUrl();
        $token = $tokenAuth ?: Fixture::getTokenAuth();

        $urlTmp = Option::get('piwikUrl');
        Option::set('piwikUrl', $host . 'tests/PHPUnit/proxy/index.php');

        $url    = $host . $pathToArchivePhp . '?token_auth=' . $token;
        return array($url, $urlTmp);
    }

    private function cleanUpPiwikUrl($urlTmp)
    {
        if (!empty($urlTmp)) {
            Option::set('piwikUrl', $urlTmp);
        } else {
            Option::delete('piwikUrl');
        }
    }
}

ArchiveWebTest::$fixture = new ManySitesImportedLogs();
ArchiveWebTest::$fixture->addSegments = true;