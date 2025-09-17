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
 * Shows migration-related entries stored in localStorage (from Trigger actions),
 * and optionally an on-demand snapshot fetched from the configured Logs endpoint.
 * - Dynamically adapts to the shape of the data to render tables.
 * - Provides status badges, tooltips for long text, and responsive layout.
 */
function MigrationLogs() {
  const [localLogs, setLocalLogs] = useState([]);
  const [externalLogs, setExternalLogs] = useState([]);
  const [loadingExternal, setLoadingExternal] = useState(false);
  const [errorExternal, setErrorExternal] = useState('');

  useEffect(() => {
    setLocalLogs(getHistory());
    setExternalLogs(getExternalLogs());
  }, []);

  const logsEndpoint = getLogsEndpoint();

  const columnsLocal = useMemo(() => (localLogs.length > 0 ? Object.keys(localLogs[0]) : []), [localLogs]);
  const columnsExternal = useMemo(
    () => (externalLogs.length > 0 ? Object.keys(externalLogs[0]) : []),
    [externalLogs]
  );

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

  const renderTable = (rows) => {
    if (!rows || rows.length === 0) {
      return (
        <div
          style={{
            padding: 16,
            color: 'var(--text-secondary)'
          }}
          role="note"
        >
          No logs available.
        </div>
      );
    }

    const keys = Object.keys(rows[0]);
    const templateCols = computeGridTemplateColumns(keys);
    const statusKeyForAria = keys.find((k) => k.toLowerCase().includes('status'));

    return (
      <>
        <div className="dt-header" style={{ gridTemplateColumns: templateCols }} role="row">
          {keys.map((key) => (
            <div className="dt-cell" role="columnheader" key={key}>
              {humanizeKey(key)}
            </div>
          ))}
        </div>

        {rows.map((row, idx) => {
          const primaryKey = row.id ?? row.uuid ?? row.oscr_request_number ?? row.request_number ?? idx;
          const rowIdLabel = row.id
            ? `ID ${String(row.id)}`
            : row.oscr_request_number
            ? `OSCR request ${String(row.oscr_request_number)}`
            : `Row ${idx + 1}`;
          const ariaStatus = statusKeyForAria ? formatValue(row[statusKeyForAria]) || 'UNKNOWN' : 'UNKNOWN';

          return (
            <div
              key={primaryKey}
              className="dt-row"
              style={{ gridTemplateColumns: templateCols }}
              role="row"
              tabIndex={0}
              aria-label={`${rowIdLabel}, status ${ariaStatus}`}
            >
              {keys.map((colKey) => renderCell(colKey, row[colKey]))}
            </div>
          );
        })}
      </>
    );
  };

  return (
    <section className="page" aria-labelledby="logs-title">
      <h1 id="logs-title">Migration Logs</h1>

      <div className="data-table" role="table" aria-label="Local migration history">
        <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
          <strong>Local History</strong>
          <div style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
            Entries captured from Trigger actions and saved in your browser.
          </div>
        </div>
        <div className="data-table__scroll">
          <div className="data-table__inner">{renderTable(localLogs)}</div>
        </div>
      </div>

      <div style={{ height: 16 }} />

      <div className="data-table" role="table" aria-label="Backend logs snapshot">
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
            <strong>Backend Logs Snapshot</strong>
            <div style={{ color: 'var(--text-secondary)', marginTop: 4 }}>
              A read-only view fetched from your configured Logs endpoint.
            </div>
          </div>
          <div className="spacer" />
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
          <div className="data-table__inner">{renderTable(externalLogs)}</div>
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
    uuid: 'UUID'
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
