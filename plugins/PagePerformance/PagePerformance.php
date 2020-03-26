<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 *
 */

namespace Piwik\Plugins\PagePerformance;

use Piwik\DataTable;
use Piwik\Plugin\Dimension\ActionDimension;
use Piwik\Plugin\ViewDataTable;
use Piwik\Plugins\PagePerformance\Columns\Metrics\AveragePageLoadTime;
use Piwik\Plugins\PagePerformance\Columns\Metrics\AverageTimeDomCompletion;
use Piwik\Plugins\PagePerformance\Columns\Metrics\AverageTimeDomProcessing;
use Piwik\Plugins\PagePerformance\Columns\Metrics\AverageTimeLatency;
use Piwik\Plugins\PagePerformance\Columns\Metrics\AverageTimeOnLoad;
use Piwik\Plugins\PagePerformance\Columns\Metrics\AverageTimeTransfer;
use Piwik\Plugins\PagePerformance\Columns\TimeDomCompletion;
use Piwik\Plugins\PagePerformance\Columns\TimeDomProcessing;
use Piwik\Plugins\PagePerformance\Columns\TimeLatency;
use Piwik\Plugins\PagePerformance\Columns\TimeOnLoad;
use Piwik\Plugins\PagePerformance\Columns\TimeTransfer;

/**
 */
class PagePerformance extends \Piwik\Plugin
{
    protected $availableForMethods = [
        'getPageUrls',
        'getEntryPageUrls',
        'getExitPageUrls',
        'getPageUrlsFollowingSiteSearch',
        'getPageTitles',
        'getPageTitlesFollowingSiteSearch',
    ];

    /**
     * @see \Piwik\Plugin::registerEvents
     */
    public function registerEvents()
    {
        $events = array(
            'AssetManager.getStylesheetFiles'        => 'getStylesheetFiles',
            'AssetManager.getJavaScriptFiles'        => 'getJsFiles',
            'Translate.getClientSideTranslationKeys' => 'getClientSideTranslationKeys',
            'API.getPagesComparisonsDisabledFor'     => 'getPagesComparisonsDisabledFor',
            'Actions.Archiving.addActionMetrics'     => 'addActionMetrics',
            'ViewDataTable.configure'                => 'configureViewDataTable',
        );

        foreach ($this->availableForMethods as $method) {
            $events["API.Actions.$method.end"] = 'enrichApi';
        }

        return $events;
    }

    public function getPagesComparisonsDisabledFor(&$pages)
    {
        //$pages[] = "PagePerformance_Actions.Transitions_Transitions";
    }

    public function getStylesheetFiles(&$stylesheets)
    {
        //$stylesheets[] = 'plugins/PagePerformance/stylesheets/styles.less';
    }

    public function getJsFiles(&$jsFiles)
    {
        $jsFiles[] = 'plugins/PagePerformance/javascripts/PagePerformance.js';
        $jsFiles[] = 'plugins/PagePerformance/javascripts/rowaction.js';
    }

    public function getClientSideTranslationKeys(&$translationKeys)
    {
        $translationKeys[] = 'PagePerformance_RowActionTitle';
        $translationKeys[] = 'PagePerformance_RowActionDescription';
        $translationKeys[] = 'PagePerformance_PagePerformanceTitle';
    }

    public function enrichApi(DataTable\DataTableInterface $dataTable, $params)
    {
        $dataTable->filter(function (DataTable $dataTable) {
            $extraProcessedMetrics = $dataTable->getMetadata(DataTable::EXTRA_PROCESSED_METRICS_METADATA_NAME);

            if (empty($extraProcessedMetrics)) {
                $extraProcessedMetrics = array();
            }

            $extraProcessedMetrics[] = new AverageTimeLatency();
            $extraProcessedMetrics[] = new AverageTimeTransfer();
            $extraProcessedMetrics[] = new AverageTimeDomProcessing();
            $extraProcessedMetrics[] = new AverageTimeDomCompletion();
            $extraProcessedMetrics[] = new AverageTimeOnLoad();
            $extraProcessedMetrics[] = new AveragePageLoadTime();
            $dataTable->setMetadata(DataTable::EXTRA_PROCESSED_METRICS_METADATA_NAME, $extraProcessedMetrics);
        });
    }

    public function configureViewDataTable(ViewDataTable $view)
    {
        $module = $view->requestConfig->getApiModuleToRequest();
        $method = $view->requestConfig->getApiMethodToRequest();
        if ('Actions' === $module && in_array($method, $this->availableForMethods)) {
            $view->config->columns_to_display[] = 'avg_page_load_time';
        }
    }


    public function addActionMetrics(&$metricsConfig)
    {
        /**
         * @var ActionDimension[] $performanceDimensions
         */
        $performanceDimensions = [
            new TimeLatency(),
            new TimeTransfer(),
            new TimeDomProcessing(),
            new TimeDomCompletion(),
            new TimeOnLoad()
        ];
        foreach($performanceDimensions as $dimension) {
            $id = $dimension->getColumnName();
            $metricsConfig['sum_'.$id] = [
                'aggregation' => 'sum',
                'query' => "sum(
                    case when " . $id . " is null
                        then 0
                        else " . $id . "
                    end
                ) / 1000"
            ];
            $metricsConfig['nb_hits_with_'.$id] = [
                'aggregation' => 'sum',
                'query' => "sum(
                    case when " . $id . " is null
                        then 0
                        else 1
                    end
                )"
            ];
            $metricsConfig['min_'.$id] = [
                'aggregation' => 'min',
                'query' => "min(" . $id . ") / 1000"
            ];
            $metricsConfig['max_'.$id] = [
                'aggregation' => 'max',
                'query' => "max(" . $id . ") / 1000"
            ];
        }
    }
}
