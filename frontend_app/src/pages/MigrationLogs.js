import React, { useEffect, useMemo, useState } from 'react';
import {
  getHistory,
  getExternalLogs,
  saveExternalLogs,
  getLogsEndpoint
} from '../utils/settings';

/**
 * PUBLIC_INTERFACE
 * MigrationLogs
 * Combined logs view:
 * - Retrieves cached local migration history entries (from Trigger actions).
 * - Retrieves backend logs from the configured Logs endpoint (if set).
 * - Displays both sources in a single dynamic table with an explicit Source column
 *   marking each row as LOCAL or BACKEND.
 */
function MigrationLogs() {
  const [localLogs, setLocalLogs] = useState([]);
  const [externalLogs, setExternalLogs] = useState([]);
  const [loadingExternal, setLoadingExternal] = useState(false);
  const [errorExternal, setErrorExternal] = useState('');
  const logsEndpoint = getLogsEndpoint();

  // Load cached data on mount
  useEffect(() => {
    setLocalLogs(getHistory());
    setExternalLogs(getExternalLogs());
  }, []);

  // Auto-refresh backend logs when a valid endpoint is configured
  useEffect(() => {
    if (logsEndpoint) {
      fetchExternalLogs();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logsEndpoint]);

  // Fetch logs from backend endpoint and cache snapshot locally
  const fetchExternalLogs = async () => {
    if (!logsEndpoint) {
      setErrorExternal('Logs endpoint is not configured. Please set it in Settings.');
      return;
    }
    setErrorExternal('');
    setLoadingExternal(true);
    try {
      const resp = await fetch(logsEndpoint);
      let data = null;
      try {
        data = await resp.json();
      } catch {
        data = null;
      }
      if (!resp.ok) {
        const msg = `Failed to fetch logs: ${resp.status} ${resp.statusText}`;
        setErrorExternal(msg);
        setLoadingExternal(false);
        return;
      }
      let normalized;
      if (Array.isArray(data)) {
        normalized = data;
      } else if (data && Array.isArray(data.data)) {
        normalized = data.data;
      } else if (data && typeof data === 'object') {
        normalized = [data];
      } else {
        normalized = [];
      }
      setExternalLogs(normalized);
      saveExternalLogs(normalized);
    } catch (e) {
      setErrorExternal(`Network error: ${e.message || 'Unable to fetch logs.'}`);
    } finally {
      setLoadingExternal(false);
    }
  };

  // Build combined rows and keys
  const combinedRows = useMemo(() => {
    const taggedLocal = (Array.isArray(localLogs) ? localLogs : []).map((r) => ({
      ...r,
      __origin: 'LOCAL'
    }));
    const taggedBackend = (Array.isArray(externalLogs) ? externalLogs : []).map((r) => ({
      ...r,
      __origin: 'BACKEND'
    }));

    const all = [...taggedLocal, ...taggedBackend];

    // Sort by timestamp/date if available and parseable; newest first
    const tsValue = (row) => {
      // Prefer explicit timestamp
      const preferKeys = ['timestamp', 'created_at', 'createdAt', 'time', 'date'];
      for (const k of preferKeys) {
        if (row[k]) {
          const t = Date.parse(row[k]);
          if (!Number.isNaN(t)) return t;
        }
      }
      // Otherwise try any field named like *date* or *time*
      for (const k of Object.keys(row)) {
        if (/date|time/i.test(k)) {
          const t = Date.parse(row[k]);
          if (!Number.isNaN(t)) return t;
        }
      }
      return -Infinity;
    };

    return all
      .slice()
      .sort((a, b) => tsValue(b) - tsValue(a));
  }, [localLogs, externalLogs]);

  const allKeys = useMemo(() => {
    const s = new Set();
    combinedRows.forEach((r) => Object.keys(r).forEach((k) => s.add(k)));

    // Preferred column order (only include if present)
    const priority = [
      '__origin',
      'timestamp',
      'status',
      'httpStatus',
      'method',
      'endpoint',
      'requestUrl',
      // Common fields across possible backends
      'oscr_request_number',
      'oscr_status',
      'jira_issue_key',
      'jira_issue_transition',
      // Messages/content
      'message',
      'error',
      'responseData',
      'requestPayload'
    ];

    const keys = Array.from(s);

    const prioritized = priority.filter((k) => s.has(k));
    const rest = keys.filter((k) => !prioritized.includes(k)).sort();
    return [...prioritized, ...rest];
  }, [combinedRows]);

  const templateCols = useMemo(() => computeGridTemplateColumns(allKeys), [allKeys]);
  const statusKeyForAria = useMemo(
    () => allKeys.find((k) => k.toLowerCase().includes('status')),
    [allKeys]
  );

  const renderCombinedTable = () => {
    if (!combinedRows || combinedRows.length === 0) {
      return (
        <div
          style={{
            padding: 16,
            color: 'var(--text-secondary)'
          }}
          role="note"
        >
          No logs available yet. Trigger a migration or fetch from backend.
        </div>
      );
    }

    return (
      <>
        <div className="dt-header" style={{ gridTemplateColumns: templateCols }} role="row">
          {allKeys.map((key) => (
            <div className="dt-cell" role="columnheader" key={key}>
              {humanizeKey(key)}
            </div>
          ))}
        </div>

        {combinedRows.map((row, idx) => {
          const primaryKey = row.id ?? row.uuid ?? row.oscr_request_number ?? row.request_number ?? idx;
          const rowIdLabel = row.id
            ? `ID ${String(row.id)}`
            : row.oscr_request_number
            ? `OSCR request ${String(row.oscr_request_number)}`
            : `Row ${idx + 1}`;
          const ariaStatus = statusKeyForAria ? formatValue(row[statusKeyForAria]) || 'UNKNOWN' : 'UNKNOWN';

          return (
            <div
              key={`${row.__origin || 'UNK'}-${primaryKey}-${idx}`}
              className="dt-row"
              style={{ gridTemplateColumns: templateCols }}
              role="row"
              tabIndex={0}
              aria-label={`${rowIdLabel}, source ${row.__origin || 'UNKNOWN'}, status ${ariaStatus}`}
            >
              {allKeys.map((colKey) => renderCell(colKey, row[colKey]))}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <section className="page" aria-labelledby="logs-title">
      <h1 id="logs-title">Migration Logs</h1>

      <div
        className="data-table"
        role="table"
        aria-label="Combined migration logs from local history and backend endpoint"
      >
        <div
          style={{
            padding: '12px 16px',
            borderBottom: '1px solid var(--border-color)',
            background: 'var(--bg-secondary)',
            display: 'flex',
            alignItems: 'center',
            gap: 10
          }}
        >
          <div>
            <strong>All Logs</strong>
            <div style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
              Showing both local history and the latest backend snapshot in one table. Use the Source column to
              distinguish entries.
            </div>
          </div>

          <div className="spacer" />

          <div style={{ color: 'var(--text-secondary)' }}>
            Local: {localLogs.length} | Backend: {externalLogs.length}
          </div>

          <div style={{ color: 'var(--text-secondary)' }}>
            Endpoint:{' '}
            <span style={{ fontFamily: 'monospace' }}>
              {logsEndpoint || <span style={{ color: '#b91c1c' }}>(not configured)</span>}
            </span>
          </div>

          <button className="btn" type="button" onClick={fetchExternalLogs} disabled={loadingExternal}>
            {loadingExternal ? 'Refreshing…' : 'Refresh from Backend'}
          </button>
        </div>

        {errorExternal && (
          <div
            role="alert"
            style={{
              padding: '12px 16px',
              color: '#b91c1c',
              fontWeight: 600,
              borderBottom: '1px solid var(--border-color)',
              background: 'var(--bg-primary)'
            }}
          >
            {errorExternal}
          </div>
        )}

        <div className="data-table__scroll">
          <div className="data-table__inner">{renderCombinedTable()}</div>
        </div>
      </div>
    </section>
  );
}

/* Helpers */

// Helper: determine if a value is empty (null/undefined/empty string)
const isEmpty = (v) => v === null || v === undefined || (typeof v === 'string' && v.trim() === '');

// Helper: safe display formatting with null/empty fallback
const formatValue = (v) => (isEmpty(v) ? '-' : String(v));

// Helper: humanize field keys for headers (snake_case, camelCase -> Title Case)
const humanizeKey = (key) => {
  if (!key) return '';
  const lower = key.toLowerCase();
  // Special labels
  const special = {
    oscr_request_number: 'OSCR Request #',
    oscr_status: 'OSCR Status',
    jira_issue_key: 'JIRA Issue Key',
    jira_issue_transition: 'JIRA Transition',
    id: 'ID',
    uuid: 'UUID',
    __origin: 'Source'
  };
  if (special[lower]) return special[lower];

  // Convert snake and camelCase to words
  let s = key
    .replace(/_/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim();

  // Title case and uppercase common acronyms
  const words = s.split(' ').map((w) => {
    const wl = w.toLowerCase();
    if (['id', 'url', 'api', 'oscr', 'jira', 'sql', 'db', 'ip'].includes(wl)) return wl.toUpperCase();
    return wl.charAt(0).toUpperCase() + wl.slice(1);
  });
  return words.join(' ');
};

// Helper: map status text to badge variant
const statusVariant = (statusRaw) => {
  const s = (statusRaw || '').toString().toLowerCase();
  if (['success', 'approved', 'completed', 'done', 'ok', 'passed'].includes(s)) return 'success';
  if (['failed', 'error', 'failure', 'errored', 'fail'].includes(s)) return 'failed';
  if (['cancelled', 'canceled', 'aborted'].includes(s)) return 'cancelled';
  if (['pending', 'in-progress', 'running', 'queued', 'processing', 'started'].includes(s)) return 'pending';
  return 'unknown';
};

// Helper: keys likely to contain long text content
const isLongTextKey = (lowerKey) =>
  /(comments|message|description|details|reason|notes|error|stack|trace|response|payload|request)/.test(lowerKey);

// Compute a responsive grid template based on keys
const computeGridTemplateColumns = (keys) =>
  keys
    .map((k) => {
      const lower = k.toLowerCase();
      if (lower === '__origin') return '120px';
      if (/_status$|^status$|status$/.test(lower)) return '140px';
      if (lower === 'jira_issue_key') return '180px';
      if (lower === 'jira_issue_transition') return '180px';
      if (/error|stack|trace|response|payload|request/.test(lower)) return '240px';
      if (/(^id$|_id$|number$|_number$|request.*number)/.test(lower)) return '160px';
      if (/comments|message|description|details|reason|notes/.test(lower)) return '1fr';
      if (/timestamp|date/.test(lower)) return '200px';
      if (/endpoint|url/.test(lower)) return '260px';
      return '180px';
    })
    .join(' ');

const renderCell = (key, value) => {
  const lower = key.toLowerCase();

  // Source badge cell
  if (lower === '__origin') {
    const label = (value || 'UNKNOWN').toString().toUpperCase();
    const variant = label === 'LOCAL' ? 'success' : label === 'BACKEND' ? 'pending' : 'unknown';
    return (
      <div className="dt-cell" role="cell">
        <span className={`badge badge--${variant}`}>{label}</span>
      </div>
    );
  }

  // Status badge cell
  if (lower.includes('status')) {
    const raw = isEmpty(value) ? '' : String(value);
    const label = raw ? raw.toUpperCase() : 'UNKNOWN';
    const variant = statusVariant(raw);
    return (
      <div className="dt-cell" role="cell">
        <span className={`badge badge--${variant}`}>{label}</span>
      </div>
    );
  }

  // Error cell (highlighted in red when not empty)
  if (/error/.test(lower)) {
    const empty = isEmpty(value);
    return (
      <div
        className={`dt-cell truncate ${empty ? 'dt-cell--muted' : 'dt-cell--error'}`}
        title={empty ? '' : String(value)}
        role="cell"
      >
        {formatValue(value)}
      </div>
    );
  }

  // Likely long text fields -> truncate and tooltip
  if (isLongTextKey(lower)) {
    const empty = isEmpty(value);
    const safeText = typeof value === 'object' ? JSON.stringify(value) : value;
    return (
      <div
        className={`dt-cell truncate ${empty ? 'dt-cell--muted' : ''}`}
        title={empty ? '' : String(safeText)}
        role="cell"
      >
        {formatValue(safeText)}
      </div>
    );
  }

  // ID/number-ish fields -> keep on one line
  const nowrap = /(^id$|_id$|number$|_number$|request.*number)/.test(lower);
  const empty = isEmpty(value);
  return (
    <div className={`dt-cell ${nowrap ? 'nowrap' : ''} ${empty ? 'dt-cell--muted' : ''}`} role="cell">
      {formatValue(value)}
    </div>
  );
};

export default MigrationLogs;
