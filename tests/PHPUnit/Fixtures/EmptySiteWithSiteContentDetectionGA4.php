<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */
namespace Piwik\Tests\Fixtures;

use Piwik\Tests\Framework\Fixture;
use Piwik\SiteContentDetector;

/**
 * Fixture that adds one site with no visits and configures site content detection test data so that GA4 will be
 * detected on the site.
 */
class EmptySiteWithSiteContentDetectionGA4 extends Fixture
{
    public $idSite = 1;

    public function setUp(): void
    {
        Fixture::createSuperUser();
        $this->setUpWebsites();

        $scd = SiteContentDetector::getInstance();

        $scd->setTestData(
            [
                'consentManagerId' => null,
                'consentManagerName' => null,
                'consentManagerUrl' => null,
                'isConnected' => false,
                'ga3' => false,
                'ga4' => true,
                'gtm' => false
            ]);

    }

    public function tearDown(): void
    {
        // empty
    }

    private function setUpWebsites()
    {
        if (!self::siteCreated($idSite = 1)) {
            self::createWebsite('2021-01-01');
        }
    }

}