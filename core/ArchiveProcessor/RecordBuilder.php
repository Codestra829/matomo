<?php
/**
 * Matomo - free/libre analytics platform
 *
 * @link    https://matomo.org
 * @license http://www.gnu.org/licenses/gpl-3.0.html GPL v3 or later
 */

namespace Piwik\ArchiveProcessor;

use Piwik\ArchiveProcessor;
use Piwik\Common;
use Piwik\DataTable;

/**
 * Inherit from this class to define archiving logic for one or more records.
 */
abstract class RecordBuilder
{
    /**
     * @var int
     */
    protected $maxRowsInTable;

    /**
     * @var int
     */
    protected $maxRowsInSubtable;

    /**
     * @var string|null
     */
    protected $columnToSortByBeforeTruncation;

    /**
     * @var int
     */
    protected $blobReportLimit;

    /**
     * @var array|null
     */
    protected $columnAggregationOps;

    /**
     * @param int|null $maxRowsInTable
     * @param int|null $maxRowsInSubtable
     * @param string|null $columnToSortByBeforeTruncation
     * @param array|null $columnAggregationOps
     */
    public function __construct(?int $maxRowsInTable = null, ?int $maxRowsInSubtable = null,
                                ?string $columnToSortByBeforeTruncation = null, ?array $columnAggregationOps = null)
    {
        $this->maxRowsInTable = $maxRowsInTable;
        $this->maxRowsInSubtable = $maxRowsInSubtable;
        $this->columnToSortByBeforeTruncation = $columnToSortByBeforeTruncation;
        $this->columnAggregationOps = $columnAggregationOps;
    }

    public function isEnabled(ArchiveProcessor $archiveProcessor): bool
    {
        return true;
    }

    public function build(ArchiveProcessor $archiveProcessor): void
    {
        if (!$this->isEnabled($archiveProcessor)) {
            return;
        }

        $recordsBuilt = $this->getRecordMetadata($archiveProcessor);

        $recordMetadataByName = [];
        foreach ($recordsBuilt as $recordMetadata) {
            $recordMetadataByName[$recordMetadata->getName()] = $recordMetadata;
        }

        $numericRecords = [];

        $records = $this->aggregate($archiveProcessor);
        foreach ($records as $recordName => $recordValue) {
            if ($recordValue instanceof DataTable) {
                $record = $recordMetadataByName[$recordName];

                $maxRowsInTable = $record->getMaxRowsInTable() ?? $this->maxRowsInTable;
                $maxRowsInSubtable = $record->getMaxRowsInSubtable() ?? $this->maxRowsInSubtable;
                $columnToSortByBeforeTruncation = $record->getColumnToSortByBeforeTruncation() ?? $this->columnToSortByBeforeTruncation;

                $this->insertRecord($archiveProcessor, $recordName, $recordValue, $maxRowsInTable, $maxRowsInSubtable, $columnToSortByBeforeTruncation);

                Common::destroy($recordValue);
            } else {
                // collect numeric records so we can insert them all at once
                $numericRecords[$recordName] = $recordValue;
            }
        }
        unset($records);

        if (!empty($numericRecords)) {
            $archiveProcessor->insertNumericRecords($numericRecords);
        }
    }

    public function buildMultiplePeriod(ArchiveProcessor $archiveProcessor): void
    {
        if (!$this->isEnabled($archiveProcessor)) {
            return;
        }

        $requestedReports = $archiveProcessor->getParams()->getArchiveOnlyReportAsArray();
        $foundRequestedReports = $archiveProcessor->getParams()->getFoundRequestedReports();

        $recordsBuilt = $this->getRecordMetadata($archiveProcessor);

        $numericRecords = array_filter($recordsBuilt, function (Record $r) { return $r->getType() == Record::TYPE_NUMERIC; });
        $blobRecords = array_filter($recordsBuilt, function (Record $r) { return $r->getType() == Record::TYPE_BLOB; });

        foreach ($blobRecords as $record) {
            if (!empty($requestedReports)
                && !in_array($record->getName(), $requestedReports)
                && !in_array($record->getName(), $foundRequestedReports)
            ) {
                continue;
            }

            $maxRowsInTable = $record->getMaxRowsInTable() ?? $this->maxRowsInTable;
            $maxRowsInSubtable = $record->getMaxRowsInSubtable() ?? $this->maxRowsInSubtable;
            $columnToSortByBeforeTruncation = $record->getColumnToSortByBeforeTruncation() ?? $this->columnToSortByBeforeTruncation;

            $archiveProcessor->aggregateDataTableRecords(
                $record->getName(),
                $maxRowsInTable,
                $maxRowsInSubtable,
                $columnToSortByBeforeTruncation,
                $this->columnAggregationOps
            );
        }

        if (!empty($numericRecords)) {
            $numericMetrics = array_map(function (Record $r) { return $r->getName(); }, $numericRecords);
            if (!empty($requestedReports)) {
                $numericMetrics = array_filter($numericMetrics, function ($name) use ($requestedReports, $foundRequestedReports) {
                    return in_array($name, $requestedReports) && !in_array($name, $foundRequestedReports);
                });
            }
            $archiveProcessor->aggregateNumericMetrics($numericMetrics, $this->columnAggregationOps);
        }
    }

    /**
     * Returns metadata for records primarily used when aggregating over non-day periods. Every numeric/blob
     * record your RecordBuilder creates should have an associated piece of record metadata.
     *
     * @return Record[]
     */
    public abstract function getRecordMetadata(ArchiveProcessor $archiveProcessor): array;

    /**
     * Derived classes should define this method to aggregate log data for a single day and return the records
     * to store indexed by record names.
     *
     * @return (DataTable|int|float|string)[] Record values indexed by their record name, eg, `['MyPlugin_MyRecord' => new DataTable()]`
     */
    protected abstract function aggregate(ArchiveProcessor $archiveProcessor): array;

    private function insertRecord(ArchiveProcessor $archiveProcessor, $recordName, DataTable\DataTableInterface $record,
                                  ?int $maxRowsInTable, ?int $maxRowsInSubtable, ?string $columnToSortByBeforeTruncation): void
    {
        $serialized = $record->getSerialized(
            $maxRowsInTable ?: $this->maxRowsInTable,
            $maxRowsInSubtable ?: $this->maxRowsInSubtable,
            $columnToSortByBeforeTruncation ?: $this->columnToSortByBeforeTruncation
        );
        $archiveProcessor->insertBlobRecord($recordName, $serialized);
        unset($serialized);
    }

    public function getMaxRowsInTable(): ?int
    {
        return $this->maxRowsInTable;
    }

    public function getMaxRowsInSubtable(): ?int
    {
        return $this->maxRowsInSubtable;
    }

    public function getColumnToSortByBeforeTruncation(): ?string
    {
        return $this->columnToSortByBeforeTruncation;
    }

    public function getPluginName(): ?string
    {
        $className = get_class($this);
        $parts = explode('\\', $className);
        $parts = array_filter($parts);
        $plugin = $parts[2];
        return $plugin;
    }

    /**
     * Returns an extra hint for LogAggregator to add to log aggregation SQL. Can be overridden if you'd
     * like the origin hint to have more information.
     *
     * @return string
     */
    public function getQueryOriginHint(): ?string
    {
        $recordBuilderName = get_class($this);
        $recordBuilderName = explode('\\', $recordBuilderName);
        return end($recordBuilderName);
    }

    /**
     * Returns true if at least one of the given reports is handled by this RecordBuilder instance
     * when invoked with the given ArchiveProcessor.
     *
     * @param ArchiveProcessor $archiveProcessor Archiving parameters, like idSite, can influence the list of
     *                                           all records a RecordBuilder produces, so it is required here.
     * @param string[] $requestedReports The list of requested reports to check for.
     * @return bool
     */
    public function isBuilderForAtLeastOneOf(ArchiveProcessor $archiveProcessor, array $requestedReports): bool
    {
        $recordMetadata = $this->getRecordMetadata($archiveProcessor);
        foreach ($recordMetadata as $record) {
            if (in_array($record->getName(), $requestedReports)) {
                return true;
            }
        }
        return false;
    }
}
