<?php

/**
 * Matomo - free/libre analytics platform
 *
 * @link    https://matomo.org
 * @license https://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\Plugins\FeatureFlags\Storage;

use Exception;
use Piwik\Config;
use Piwik\Plugins\FeatureFlags\FeatureFlagInterface;
use Piwik\Plugins\FeatureFlags\FeatureFlagStorageInterface;

class ConfigFeatureFlagStorage implements FeatureFlagStorageInterface
{
    private const CONFIG_FEATURE_NAME_SUFFIX = '_feature';
    private const CONFIG_FEATURE_ENABLED_VALUE = 'enabled';
    private const CONFIG_FEATURE_DISABLED_VALUE = 'disabled';

    /**
     * @var Config
     */
    private $config;

    /**
     * @internal
     * @param Config $config
     */
    public function __construct(Config $config)
    {
        $this->config = $config;
    }

    /**
     * @internal
     * @param FeatureFlagInterface $feature
     * @return bool|null
     */
    public function isFeatureActive(FeatureFlagInterface $feature): ?bool
    {
        try {
            $featureFlagsConfig = $this->config->FeatureFlags;
        } catch (Exception $e) {
            return false;
        };

        $configNameForFeature = $this->getConfigNameForFeature($feature->getName());

        if (!isset($featureFlagsConfig[$configNameForFeature])) {
            return null;
        }

        $flagValue = $featureFlagsConfig[$configNameForFeature];

        return $flagValue === self::CONFIG_FEATURE_ENABLED_VALUE;
    }

    /**
     * @internal
     * @param FeatureFlagInterface $feature
     * @return void
     */
    public function disableFeatureFlag(FeatureFlagInterface $feature): void
    {
        if (!isset($this->config->FeatureFlags[$this->getConfigNameForFeature($feature->getName())])) {
            return;
        }

        $this->config->FeatureFlags[$this->getConfigNameForFeature($feature->getName())] = "disabled";
        $this->config->forceSave();
    }

    /**
     * @internal
     * @param FeatureFlagInterface $feature
     * @return void
     */
    public function enableFeatureFlag(FeatureFlagInterface $feature): void
    {
        if (!isset($this->config->FeatureFlags)) {
            $this->config->FeatureFlags = [];
        }

        $this->config->FeatureFlags[$this->getConfigNameForFeature($feature->getName())] = "enabled";
        $this->config->forceSave();
    }

    /**
     * @internal
     * @param FeatureFlagInterface $feature
     * @return void
     */
    public function deleteFeatureFlag(FeatureFlagInterface $feature): void
    {
        if (!isset($this->config->FeatureFlags[$this->getConfigNameForFeature($feature->getName())])) {
            return;
        }

        unset($this->config->FeatureFlags[$this->getConfigNameForFeature($feature->getName())]);
        $this->config->forceSave();
    }

    private function getConfigNameForFeature(string $featureName): string
    {
        return $featureName . self::CONFIG_FEATURE_NAME_SUFFIX;
    }
}
