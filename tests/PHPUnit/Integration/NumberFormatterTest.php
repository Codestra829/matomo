<?php

/**
 * Matomo - free/libre analytics platform
 *
 * @link    https://matomo.org
 * @license https://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Tests\Integration;

use Piwik\Container\StaticContainer;
use Piwik\NumberFormatter;
use Piwik\Translation\Translator;

/**
 * @group Core
 * @group NumberFormatter
 */
class NumberFormatterTest extends \PHPUnit\Framework\TestCase
{
    /**
     * @var Translator
     */
    private $translator;

    public function setUp(): void
    {
        \Piwik\Plugin\Manager::getInstance()->loadPluginTranslations();

        $this->translator = StaticContainer::get('Piwik\Translation\Translator');
    }

    public function tearDown(): void
    {
        $this->translator->reset();
    }

    /**
     * @dataProvider getFormatMethodTestData
     */
    public function testFormatCorrectlyFormatsValueAsNumberOrPercent(
        $language,
        $value,
        $maximumFractionDigits,
        $minimumFractionDigits,
        $expected
    ) {
        $this->translator->setCurrentLanguage($language);
        $numberFormatter = new NumberFormatter($this->translator);
        $this->assertEquals($expected, $numberFormatter->format($value, $maximumFractionDigits, $minimumFractionDigits));
    }

    public function getFormatMethodTestData()
    {
        return array(
            // number formatting
            array('en', 5, 0, 0, '5'),
            array('en', -5, 0, 3, '-5'),
            array('en', 5.299, 0, 0, '5'),
            array('en', 5.299, 3, 0, '5.299'),
            array('en', sqrt(33), 2, 0, '5.74'),

            // percent formatting
            array('en', '5.299%', 0, 0, '5%'),
            array('en', '5.299%', 3, 0, '5.299%'),
        );
    }

    /**
     * @dataProvider getNumberFormattingTestData
     */
    public function testNumberFormatting($language, $value, $maximumFractionDigits, $minimumFractionDigits, $expected)
    {
        $this->translator->setCurrentLanguage($language);
        $numberFormatter = new NumberFormatter($this->translator);

        $this->assertSame($expected, $numberFormatter->formatNumber($value, $maximumFractionDigits, $minimumFractionDigits));
    }

    public function getNumberFormattingTestData()
    {
        return array(
            // english formats
            array('en', 5, 0, 0, '5'),
            array('en', -5, 0, 3, '-5'),
            array('en', 5.299, 0, 0, '5'),
            array('en', 5.299, 3, 0, '5.299'),
            array('en', -50, 3, 3, '-50.000'),
            array('en', 5000, 0, 0, '5,000'),
            array('en', 5000000, 0, 0, '5,000,000'),
            array('en', -5000000, 0, 0, '-5,000,000'),

            // foreign languages
            array('ar', 51239.56, 3, 0, '51٬239٫56'),
            array('be', 51239.56, 3, 0, '51 239,56'),
            array('de', 51239.56, 3, 0, '51.239,56'),
            array('bn', 152551239.56, 3, 0, '15,25,51,239.56'),
            array('hi', 152551239.56, 0, 0, '15,25,51,240'),
            array('lt', -152551239.56, 0, 0, '−152 551 240'),
        );
    }

    /**
     * @dataProvider getPercentNumberFormattingTestData
     */
    public function testPercentNumberFormatting($language, $value, $maximumFractionDigits, $minimumFractionDigits, $expected)
    {
        $this->translator->setCurrentLanguage($language);
        $numberFormatter = new NumberFormatter($this->translator);
        $this->assertEquals($expected, $numberFormatter->formatPercent($value, $maximumFractionDigits, $minimumFractionDigits));
    }

    public function getPercentNumberFormattingTestData()
    {
        return array(
            // english formats
            array('en', 5, 0, 0, '5%'),
            array('en', -5, 0, 3, '-5%'),
            array('en', 5.299, 0, 0, '5%'),
            array('en', 5.299, 3, 0, '5.299%'),
            array('en', -50, 3, 3, '-50.000%'),
            array('en', -50, 1, 1, '-50.0%'),
            array('en', -50.1, 3, 3, '-50.100%'),
            array('en', 5000, 0, 0, '5,000%'),
            array('en', +5000, 0, 0, '5,000%'),
            array('en', 5000000, 0, 0, '5,000,000%'),
            array('en', -5000000, 0, 0, '-5,000,000%'),

            // foreign languages
            array('ar', 51239.56, 3, 0, '51٬239٫56٪؜'),
            array('be', 51239.56, 3, 0, '51 239,56 %'),
            array('de', 51239.56, 3, 0, '51.239,56 %'),
            array('bn', 152551239.56, 3, 0, '152,551,239.56%'),
            array('hi', 152551239.56, 0, 0, '15,25,51,240%'),
            array('lt', -152551239.56, 0, 0, '−152 551 240 %'),
        );
    }

    /**
     * @dataProvider getPercentNumberEvolutionFormattingTestData
     */
    public function testPercentEvolutionNumberFormatting($language, $value, $expected)
    {
        $this->translator->setCurrentLanguage($language);
        $numberFormatter = new NumberFormatter($this->translator);
        $this->assertEquals($expected, $numberFormatter->formatPercentEvolution($value));
    }

    public function getPercentNumberEvolutionFormattingTestData()
    {
        return array(
            // english formats
            array('en', 5, '+5%'),
            array('en', -5, '-5%'),
            array('en', 5.299, '+5%'),
            array('en', -50, '-50%'),
            array('en', 5000, '+5,000%'),
            array('en', +5000, '+5,000%'),
            array('en', 5000000, '+5,000,000%'),
            array('en', -5000000, '-5,000,000%'),
        );
    }

    public function testChangeLanguage()
    {
        $this->translator->setCurrentLanguage('en');
        $numberFormatter = new NumberFormatter($this->translator);

        $this->assertEquals('5,000.1', $numberFormatter->formatNumber(5000.1, 1));
        $this->assertEquals('50.1%', $numberFormatter->formatPercent(50.1, 1));
        $this->assertEquals('+50%', $numberFormatter->formatPercentEvolution(50));
        $this->assertEquals('$5,000.10', $numberFormatter->formatCurrency(5000.1, '$'));

        $this->translator->setCurrentLanguage('de');
        $this->assertEquals('5.000,1', $numberFormatter->formatNumber(5000.1, 1));
        $this->assertEquals('50,1 %', $numberFormatter->formatPercent(50.1, 1));
        $this->assertEquals('+50 %', $numberFormatter->formatPercentEvolution(50));
        $this->assertEquals('5.000,10 €', $numberFormatter->formatCurrency(5000.1, '€'));

        $this->translator->setCurrentLanguage('ar');
        $this->assertEquals('5٬000٫1٪؜', $numberFormatter->formatPercent(5000.1, 1));

        $this->translator->setCurrentLanguage('bn');
        $this->assertEquals('50,00,000', $numberFormatter->formatNumber(5000000));
    }

    /**
     * @dataProvider getTestDataForCompactFormatting
     */
    public function testFormatNumberCompact($language, $value, $expected)
    {
        $this->translator->setCurrentLanguage($language);
        $numberFormatter = new NumberFormatter($this->translator);

        $this->assertEquals($expected, $numberFormatter->formatNumberCompact($value));
    }

    public function getTestDataForCompactFormatting()
    {
        return [
            ['en', 100, '100'],
            ['en', 525.22, '525'],
            ['en', 1000, '1K'],
            ['en', 1233, '1.23K'],
            ['en', 12330, '12.3K'],
            ['en', 123306, '123K'],
            ['en', 1233060, '1.23M'],
            ['en', 12330600, '12.3M'],
            ['en', 123306000, '123M'],
            ['en', 1233060000, '1.23B'],
            ['en', 12330600000, '12.3B'],
            ['en', 123306000000, '123B'],
            ['en', 1233060000000, '1.23T'],
            ['en', 12330600000000, '12.3T'],
            ['en', 123306000000000, '123T'],
            ['en', 1233060000000000, '1,233T'],
            ['en', 12330600000000000, '12,331T'],

            ['ja', 1233, '1,233'],
            ['ja', 12330, '1.23万'],
            ['ja', 123306, '12.3万'],
            ['ja', 1233060, '123万'],
            ['ja', 12330600, '1,233万'],
            ['ja', 123306000, '1.23億'],
            ['ja', 1233060000, '12.3億'],
            ['ja', 12330600000, '123億'],
            ['ja', 123306000000, '1,233億'],
            ['ja', 1233060000000, '1.23兆'],
            ['ja', 12330600000000, '12.3兆'],
            ['ja', 123306000000000, '123兆'],
            ['ja', 1233060000000000, '1,233兆'],
            ['ja', 12330600000000000, '1.23京'],

            ['el', 12330600000, '12,3 δισ.'],
            ['fr', 12330600000, '12,3 Md'],
            ['hl', 12330600000, '12.3B'],
            ['de', 12330600000, '12,3 Mrd.'],
            ['te', 12330600000, '12.3బి'],
            ['zh-cn', 12330600000, '123亿'],
        ];
    }

    /**
     * @dataProvider getTestDataForCompactCurrencyFormatting
     */
    public function testFormatCurrencyCompact($language, $value, $expected)
    {
        $this->translator->setCurrentLanguage($language);
        $numberFormatter = new NumberFormatter($this->translator);

        $this->assertEquals($expected, $numberFormatter->formatCurrencyCompact($value, '$'));
    }

    public function getTestDataForCompactCurrencyFormatting()
    {
        return [
            ['en', 100, '$100'],
            ['en', 525.22, '$525'],
            ['en', 1000, '$1K'],
            ['en', 1233, '$1.23K'],
            ['en', 12330, '$12.3K'],
            ['en', 123306, '$123K'],
            ['en', 1233060, '$1.23M'],
            ['en', 12330600, '$12.3M'],
            ['en', 123306000, '$123M'],
            ['en', 1233060000, '$1.23B'],
            ['en', 12330600000, '$12.3B'],
            ['en', 123306000000, '$123B'],
            ['en', 1233060000000, '$1.23T'],
            ['en', 12330600000000, '$12.3T'],
            ['en', 123306000000000, '$123T'],
            ['en', 1233060000000000, '$1,233T'],
            ['en', 12330600000000000, '$12,331T'],

            ['ja', 1233, '$1,233'],
            ['ja', 12330, '$1.23万'],
            ['ja', 123306, '$12.3万'],
            ['ja', 1233060, '$123万'],
            ['ja', 12330600, '$1,233万'],
            ['ja', 123306000, '$1.23億'],
            ['ja', 1233060000, '$12.3億'],
            ['ja', 12330600000, '$123億'],
            ['ja', 123306000000, '$1,233億'],
            ['ja', 1233060000000, '$1.23兆'],
            ['ja', 12330600000000, '$12.3兆'],
            ['ja', 123306000000000, '$123兆'],
            ['ja', 1233060000000000, '$1,233兆'],
            ['ja', 12330600000000000, '$1.23京'],

            ['el', 12330600000, '12,3 δισ. $'],
            ['fr', 12330600000, '12,3 Md $'],
            ['hl', 12330600000, '$12.3B'],
            ['de', 12330600000, '12,3 Mrd. $'],
            ['te', 12330600000, '$12.3బి'],
            ['zh-cn', 12330600000, '$123亿'],
        ];
    }
}
