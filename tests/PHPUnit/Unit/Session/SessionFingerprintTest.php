<?php
/**
 * Piwik - free/libre analytics platform
 *
 * @link http://piwik.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

namespace Piwik\Tests\Unit\Session;


use Piwik\Session\SessionFingerprint;

class SessionFingerprintTest extends \PHPUnit_Framework_TestCase
{
    /**
     * @var SessionFingerprint
     */
    private $testInstance;

    public function setUp()
    {
        parent::setUp();

        $this->testInstance = new SessionFingerprint();
    }

    public function test_getUser_ReturnsUserNameSessionVar_WhenSessionVarIsSet()
    {
        $_SESSION[SessionFingerprint::USER_NAME_SESSION_VAR_NAME] = 'testuser';
        $this->assertEquals('testuser', $this->testInstance->getUser());
    }

    public function test_getUser_ReturnsNull_WhenSessionVarIsNotSet()
    {
        $this->assertNull($this->testInstance->getUser());
    }

    public function test_getUserInfo_ReturnsUserInfoSessionVar_WhenSessionVarIsSet()
    {
        $sessionVarValue = [
            'ip' => 'someip',
            'ua' => 'someua',
        ];

        $_SESSION[SessionFingerprint::SESSION_INFO_SESSION_VAR_NAME] = $sessionVarValue;
        $this->assertEquals($sessionVarValue, $this->testInstance->getUserInfo());
    }

    public function test_getUserInfo_ReturnsNull_WhenSessionVarIsNotSet()
    {
        $this->assertNull($this->testInstance->getUserInfo());
    }

    public function test_initialize_SetsSessionVarsToCurrentRequest()
    {
        $_SERVER['REMOTE_ADDR'] = '55.66.77.88';
        $_SERVER['HTTP_USER_AGENT'] = 'test-user-agent';
        $this->testInstance->initialize('testuser');

        $this->checkSessionSecret();

        $this->assertEquals('testuser', $_SESSION[SessionFingerprint::USER_NAME_SESSION_VAR_NAME]);
        $this->assertEquals(
            ['ip' => '55.66.77.88', 'ua' => 'test-user-agent'],
            $_SESSION[SessionFingerprint::SESSION_INFO_SESSION_VAR_NAME]
        );
    }

    public function test_initialize_DoesNotSetUserAgent_IfUserAgentIsNotInHttpRequest()
    {
        $_SERVER['REMOTE_ADDR'] = '55.66.77.88';
        unset($_SERVER['HTTP_USER_AGENT']);
        $this->testInstance->initialize('testuser');

        $this->checkSessionSecret();

        $this->assertEquals('testuser', $_SESSION[SessionFingerprint::USER_NAME_SESSION_VAR_NAME]);
        $this->assertEquals(
            ['ip' => '55.66.77.88', 'ua' => null],
            $_SESSION[SessionFingerprint::SESSION_INFO_SESSION_VAR_NAME]
        );
    }

    public function test_initialize_DoesNotSetIpAddress_IfNoIpAddressInHttpRequest()
    {
        unset($_SERVER['REMOTE_ADDR']);
        $_SERVER['HTTP_USER_AGENT'] = 'test-user-agent';
        $this->testInstance->initialize('testuser');

        $this->checkSessionSecret();

        $this->assertEquals('testuser', $_SESSION[SessionFingerprint::USER_NAME_SESSION_VAR_NAME]);
        $this->assertEquals(
            ['ip' => '0.0.0.0', 'ua' => 'test-user-agent'],
            $_SESSION[SessionFingerprint::SESSION_INFO_SESSION_VAR_NAME]
        );
    }

    /**
     * @dataProvider getTestDataForIsMatchingCurrentRequest
     */
    public function test_isMatchingCurrentRequest_ChecksIfSessionVarsMatchRequest(
        $sessionIp, $sessionUa, $requestIp, $requestUa, $expectedResult
    ) {
        $_SESSION[SessionFingerprint::SESSION_INFO_SESSION_VAR_NAME] = [
            'ip' => $sessionIp,
            'ua' => $sessionUa,
        ];

        $_SERVER['REMOTE_ADDR'] = $requestIp;
        $_SERVER['HTTP_USER_AGENT'] = $requestUa;

        $this->assertEquals($expectedResult, $this->testInstance->isMatchingCurrentRequest());
    }

    public function getTestDataForIsMatchingCurrentRequest()
    {
        return [
            ['11.22.33.44', 'test ua', '11.22.33.44', 'test ua', true],
            ['11.22.33.55', 'test ua', '11.22.33.44', 'test ua', false],
            ['11.22.33.44', 'nontest ua', '11.22.33.44', 'test ua', false],
            [null, 'test ua', '11.22.33.44', 'test ua', false],
            ['11.22.33.44', null, '11.22.33.44', 'test ua', false],
        ];
    }

    public function test_isMatchingCurrentRequest_ReturnsFalse_IfUserInfoSessionVarDoesNotExist()
    {
        $_SERVER['REMOTE_ADDR'] = '11.22.33.44';
        $_SERVER['HTTP_USER_AGENT'] = 'test-ua';

        $this->assertEquals(false, $this->testInstance->isMatchingCurrentRequest());
    }

    public function test_isMatchingCurrentRequest_ReturnsFalse_IfRequestDetailsDoNotExist()
    {
        $_SESSION[SessionFingerprint::SESSION_INFO_SESSION_VAR_NAME] = [
            'ip' => '11.22.33.44',
            'ua' => 'test-ua',
        ];

        $this->assertEquals(false, $this->testInstance->isMatchingCurrentRequest());
    }

    public function test_getHash_CreatesCorrectHash()
    {
        $passwordModifiedTime = '2012-01-01 00:34:56';
        $_SESSION[SessionFingerprint::SESSION_INFO_SESSION_VAR_NAME] = [
            'sec' => 'somesecret',
        ];

        $this->assertEquals(
            md5($passwordModifiedTime . 'somesecret'),
            $this->testInstance->getHash($passwordModifiedTime)
        );
    }

    /**
     * @expectedException \Exception
     * @expectedExceptionMessage session fingerprint has not been initialized yet
     */
    public function test_getHash_ThrowsIfSessionIsUninitialized()
    {
        $this->testInstance->getHash('2012-01-01 00:23:45');
    }

    public function test_destroy_RemovesSessionFingerprintSessionVars()
    {
        $_SESSION['someotherdata'] = 'somedata';
        $_SESSION[SessionFingerprint::USER_NAME_SESSION_VAR_NAME] = 'someuser';
        $_SESSION[SessionFingerprint::SESSION_INFO_SESSION_VAR_NAME] = [
            'some' => 'data',
        ];

        $this->testInstance->clear();

        $this->assertEquals(['someotherdata' => 'somedata'], $_SESSION);
    }

    private function checkSessionSecret()
    {
        $this->assertRegExp('/^[a-zA-Z0-9]{32}$/', $_SESSION[SessionFingerprint::SESSION_INFO_SESSION_VAR_NAME]['sec']);
        unset($_SESSION[SessionFingerprint::SESSION_INFO_SESSION_VAR_NAME]['sec']);
    }
}
