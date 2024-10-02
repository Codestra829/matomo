<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link    https://matomo.org
 * @license https://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Tests\Framework\Assert;

use PHPUnit\Framework\Assert;
use Piwik\Columns\Dimension;
use Piwik\Container\StaticContainer;
use Piwik\DataTable;
use Piwik\DataTable\Row;
use Piwik\Date;
use Piwik\Metrics;
use Piwik\Plugin\Manager;
use Piwik\Plugin\Metric;
use Piwik\Plugin\ProcessedMetric;
use Piwik\Plugin\Report;
use Piwik\Plugin\ReportsProvider;
use Symfony\Component\ExpressionLanguage\ExpressionFunction;
use Symfony\Component\ExpressionLanguage\ExpressionLanguage;

/**
 * TODO: documentation on how to use this class
 */
class ProcessedMetricAssert
{
    /**
     * TODO
     *
     * @param ProcessedMetric $processedMetric
     * @param DataTable $dataTable
     * @return void
     */
    public function assertProcessedMetricIsValidFor(ProcessedMetric $processedMetric, Row $row, ?Report $report = null): void
    {
        $formula = $processedMetric->getFormula();
        if (empty($formula)) {
            return;
        }

        $columns = $row->getColumns();

        $expressionLanguage = new ExpressionLanguage();
        $expressionLanguage->addFunction(ExpressionFunction::fromPhp('round'));
        $expressionLanguage->addFunction(ExpressionFunction::fromPhp('min'));
        $expressionLanguage->addFunction(ExpressionFunction::fromPhp('max'));
        $expressionLanguage->addFunction(ExpressionFunction::fromPhp('abs'));

        // check that the formula parses
        try {
            $expressionLanguage->lint($formula, array_keys($columns));
        } catch (\Exception $ex) {
            $optionalReportDesc = $this->getReportDescriptor($report);

            if (preg_match('/Variable "(.*?)" is not valid around/i', $ex->getMessage(), $matches)) {
                $missingVariable = $matches[1];
                throw new \Exception(
                    get_class($processedMetric) . '\'s formula ' . $optionalReportDesc . ' has unknown metric: ' . $missingVariable
                    . '. Please make sure it is either specified in the report or in ProcessedMetric::getDependentMetrics() or in ProcessedMetric::getTemporaryMetrics().'
                );
            }

            throw new \Exception(get_class($processedMetric) . '\'s formula' . $optionalReportDesc . ' is invalid: ' . $ex->getMessage());
        }

        // check that the formula computes to the same value as the compute() method
        $processedMetric->clearTemporaryMetricCache();
        $computedValue = $processedMetric->compute($row);

        $formulaValue = $expressionLanguage->evaluate($formula, $columns);

        $descriptiveErrorMessage = 'Formula for ' . get_class($processedMetric) . ' did not evaluate to the same '
            . "value as its compute() method.\n"
            . "  Column values used: " . json_encode($columns);

        Assert::assertEqualsWithDelta($computedValue, $formulaValue, 0.001, $descriptiveErrorMessage);
    }

    /**
     * TODO
     * @param string $pluginName
     * @return void
     * @throws \Piwik\Exception\DI\DependencyException
     * @throws \Piwik\Exception\DI\NotFoundException
     */
    public function assertProcessedMetricsInReportMetadataAreValid(string $pluginName, array $metricClassesToIgnore = []): void
    {
        if (!Manager::getInstance()->isPluginLoaded($pluginName)) {
            throw new \Exception("Unexpected: Plugin '$pluginName' is not loaded, cannot run test.");
        }

        $allReports = StaticContainer::get(ReportsProvider::class)->getAllReports();
        if (empty($allReports)) {
            throw new \Exception("Unexpected: list of all reports from ReportsProvider is empty, cannot run test.");
        }

        $allReports = array_filter($allReports, function ($r) use ($pluginName) {
            return $r->getModule() == $pluginName;
        });
        if (empty($allReports)) {
            throw new \Exception("Unexpected: The '$pluginName' plugin has no ProcessedMetric classes, this test does not need to be defined for it.");
        }

        foreach ($allReports as $report) {
            $this->checkProcessedMetricsInReport($report, $metricClassesToIgnore);
        }
    }

    /**
     * public for tests
     *
     * @internal
     */
    public function checkProcessedMetricsInReport(Report $report, array $metricClassesToIgnore = [])
    {
        $processedMetrics = $report->getProcessedMetricsById();
        if (empty($processedMetrics)) {
            return;
        }

        $dataTableRow = $this->createRandomTestDataFor($report);
        foreach ($processedMetrics as $processedMetric) {
            if (in_array(get_class($processedMetric), $metricClassesToIgnore)) {
                continue;
            }

            $this->assertProcessedMetricIsValidFor($processedMetric, $dataTableRow, $report);
        }
    }

    private function createRandomTestDataFor(Report $report): Row
    {
        $testDataRow = new DataTable\Row();
        foreach ($report->getMetrics() as $name => $translatedName) {
            $testDataRow->addColumn($name, $this->randomColumnValue($name, null, $report));
        }
        foreach ($report->getProcessedMetricsById() as $name => $metric) {
            if ($metric instanceof ProcessedMetric) {
                $metricSemanticTypes = $metric->getExtraMetricSemanticTypes();
                $dependentMetrics = array_unique(array_merge($metric->getDependentMetrics(), $metric->getTemporaryMetrics()));

                foreach ($dependentMetrics as $tempMetricName) {
                    $semanticType = $metricSemanticTypes[$tempMetricName] ?? null;
                    $testDataRow->setColumn($tempMetricName, $this->randomColumnValue($tempMetricName, $semanticType, $report));
                }
            }
        }
        return $testDataRow;
    }

    /**
     * @param string|Metric $metric
     * @param ?string $semanticType
     * @return mixed
     */
    private function randomColumnValue($metric, ?string $semanticType = null, ?Report $report = null)
    {
        $reportDescriptor = $this->getReportDescriptor($report);

        if (!$semanticType) {
            if ($metric instanceof Metric) {
                $metricDescriptor = get_class($metric);

                $semanticType = $metric->getSemanticType();
                if (empty($semanticType)) {
                    throw new \Exception($metricDescriptor . "$reportDescriptor does not have an associated semantic type. Associate one by overriding the Metric::getSemanticType() method.");
                }
            } else {
                $metricDescriptor = $metric;

                $defaultSemanticTypes = Metrics::getDefaultMetricSemanticTypes();
                if (!isset($defaultSemanticTypes[$metric])) {
                    throw new \Exception("Metric '$metricDescriptor'$reportDescriptor has no associated semantic type. Associate type type through the Metrics.getDefaultMetricSemanticTypes event.");
                }
                $semanticType = $defaultSemanticTypes[$metric];
            }
        }

        switch ($semanticType) {
            case Dimension::TYPE_BINARY:
                return random_bytes(16);
            case Dimension::TYPE_TEXT:
                return 'random text ' . random_int(0, 1000);
            case Dimension::TYPE_MONEY:
            case Dimension::TYPE_FLOAT:
                return random_int(0, 100000) / 100;
            case Dimension::TYPE_BYTE:
            case Dimension::TYPE_DURATION_S:
            case Dimension::TYPE_NUMBER:
                return random_int(0, 1000);
            case Dimension::TYPE_DURATION_MS:
                return random_int(0, 1000 * 1000);
            case Dimension::TYPE_URL:
                $hostname = 'site' . random_int(0, 100);
                $path = 'path' . random_int(0, 100);
                return "https://$hostname.com/random/url/$path";
            case Dimension::TYPE_DATE:
                return date('Y-m-d', $this->randomTimestamp());
            case Dimension::TYPE_TIME:
                return date('H:i:s', $this->randomTimestamp());
            case Dimension::TYPE_DATETIME:
                return date(Date::DATE_TIME_FORMAT, $this->randomTimestamp());
            case Dimension::TYPE_TIMESTAMP:
                return $this->randomTimestamp();
            case Dimension::TYPE_BOOL:
                return random_int(0, 1) === 1;
            case Dimension::TYPE_PERCENT:
                return random_int(0, 1000) / 1000;
            case Dimension::TYPE_DIMENSION:
            case Dimension::TYPE_ENUM:
                throw new \Exception("Unable to generate random value for metric $metricDescriptor based on its semantic type.");
            default:
                throw new \Exception("Unknown semantic type '$semanticType' for metric $metricDescriptor.");
        }
    }

    private function randomTimestamp()
    {
        return random_int(strtotime('2023-01-01 00:00:00'), time());
    }

    private function getReportDescriptor(?Report $report)
    {
        return $report ? (' (in report ' . get_class($report) . ')') : '';
    }
}
