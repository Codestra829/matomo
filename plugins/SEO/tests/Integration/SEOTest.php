<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\SEO\tests\Integration;

use Piwik\DataTable\Renderer;
use Piwik\Http;
use Piwik\NumberFormatter;
use Piwik\Piwik;
use Piwik\Plugins\SEO\API;
use Exception;
use Piwik\Tests\Framework\Mock\FakeAccess;
use Piwik\Tests\Framework\TestCase\IntegrationTestCase;

/**
 * @group SEO
 * @group SEOTest
 * @group Plugins
 */
class SEOTest extends IntegrationTestCase
{
    public function setUp(): void
    {
        parent::setUp();

        // setup the access layer
        FakeAccess::setIdSitesView(array(1, 2));
        FakeAccess::setIdSitesAdmin(array(3, 4));

        //finally we set the user as a Super User by default
        FakeAccess::$superUser = true;

        $_SERVER['HTTP_USER_AGENT'] = 'Mozilla/5.0 (X11; Fedora; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/71.0.3578.98 Safari/537.36';
    }

    /**
     * tell us when the API is broken
     */
    public function test_API()
    {
        // get ip from external source
        $ip = file_get_contents('https://api.ipify.org');

        $dataTable = API::getInstance()->getRank('http://matomo.org/');
        $renderer = Renderer::factory('json');
        $renderer->setTable($dataTable);
        $ranks = json_decode($renderer->render(), true);

        foreach ($ranks as $rank) {
            if ($rank['rank'] == Piwik::translate('General_Error')) {
                $this->markTestSkipped('An exception raised when fetching data. Skipping this test for now.');
                continue;
            }
            if(!$rank['rank'] && $this->debugFails($rank['id']))
            {
                $this->markTestSkipped('An exception raised Bing take longer than normal.');
                continue;
            }else{
                $this->assertNotEmpty($rank['rank'],
                  $rank['id'] . ' expected non-zero rank, got [' . $rank['rank'] . '], ip [' . $ip . ']');
            }

        }
    }

    public function provideContainerConfig()
    {
        return array(
          'Piwik\Access' => new FakeAccess()
        );
    }

    private function debugFails($rankId)
    {
        if ($rankId == 'bing-index') {
            $url = 'https://www.bing.com/search?setlang=en-US&rdr=1&q=site%3Ahttp://matomo.org/';
            $response = Http::sendHttpRequest($url, 20, @$_SERVER['HTTP_USER_AGENT']);
            return preg_match('#([0-9,\.]+) results#i', $response, $p);
        }
        return false;
    }

}
