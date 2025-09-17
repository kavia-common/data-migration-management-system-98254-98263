import React, { useEffect, useMemo, useState } from 'react';
import {
  getSettings,
  saveSettings,
  clearSettings,
  isValidHttpUrl,
} from '../utils/settings';

/**
 * PUBLIC_INTERFACE
 * Settings
 * Settings page for configuring dynamic backend endpoints and task parameters.
 * - Provides inputs to configure Trigger and Logs API endpoints.
 * - Allows managing arbitrary key/value task parameters.
 * - Persists values in localStorage for use by other pages/components.
 */
function Settings() {
  const [triggerUrl, setTriggerUrl] = useState('');
  const [logsUrl, setLogsUrl] = useState('');
  const [params, setParams] = useState([{ key: '', value: '' }]);
  const [errors, setErrors] = useState({});
  const [saveState, setSaveState] = useState({ status: 'idle', message: '' });
  const [lastSavedAt, setLastSavedAt] = useState(null);

  // Load settings on mount
  useEffect(() => {
    const s = getSettings();
    setTriggerUrl(s.endpoints.trigger || '');
    setLogsUrl(s.endpoints.logs || '');
    // Show at least one empty row for better UX
    const p = Array.isArray(s.params) && s.params.length > 0 ? s.params : [{ key: '', value: '' }];
    setParams(p);
  }, []);

  const addParamRow = () => {
    setParams((prev) => [...prev, { key: '', value: '' }]);
  };

  const removeParamRow = (idx) => {
    setParams((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateParamRow = (idx, field, value) => {
    setParams((prev) =>
      prev.map((r, i) => (i === idx ? { ...r, [field]: value } : r))
    );
  };

  const validationErrors = useMemo(() => {
    const e = {};
    if (!triggerUrl || !isValidHttpUrl(triggerUrl)) {
      e.triggerUrl = 'Please enter a valid http(s) URL for the Trigger endpoint.';
    }
    if (!logsUrl || !isValidHttpUrl(logsUrl)) {
      e.logsUrl = 'Please enter a valid http(s) URL for the Logs endpoint.';
    }
    // Parameter keys must be unique and not empty if the row has any content
    const filledRows = params
      .map((r) => ({ key: (r.key || '').trim(), value: (r.value ?? '') }))
      .filter((r) => r.key !== '' || String(r.value).trim() !== '');
    const keys = filledRows.map((r) => r.key).filter((k) => k !== '');
    const duplicates = keys.filter((k, i) => keys.indexOf(k) !== i);
    if (duplicates.length > 0) {
      e.params = `Duplicate parameter key(s): ${Array.from(new Set(duplicates)).join(', ')}`;
    }
    return e;
  }, [triggerUrl, logsUrl, params]);

  const handleSave = (ev) => {
    ev.preventDefault();
    setSaveState({ status: 'idle', message: '' });

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setSaveState({ status: 'error', message: 'Fix validation errors and try again.' });
      return;
    }

    // Save only non-empty rows
    const cleanedParams = params
      .map((r) => ({ key: String(r.key || '').trim(), value: r.value }))
      .filter((r) => r.key !== '');

    const saved = saveSettings({
      endpoints: { trigger: triggerUrl.trim(), logs: logsUrl.trim() },
      params: cleanedParams,
    });

    setParams(saved.params.length > 0 ? saved.params : [{ key: '', value: '' }]);
    setSaveState({ status: 'success', message: 'Settings saved.' });
    setLastSavedAt(new Date());
  };

  const handleClear = () => {
    clearSettings();
    setTriggerUrl('');
    setLogsUrl('');
    setParams([{ key: '', value: '' }]);
    setErrors({});
    setSaveState({ status: 'success', message: 'Settings cleared. You can enter new values and save again.' });
    setLastSavedAt(new Date());
  };

  return (
    <section className="page" aria-labelledby="settings-title">
      <h1 id="settings-title">Settings</h1>
      <p className="description">
        Configure backend API endpoints and task parameters. These values are stored in your browser’s localStorage and used across the app.
      </p>

      <form onSubmit={handleSave} noValidate>
        <div
          style={{
            display: 'grid',
            gap: 16,
            marginTop: 16,
            background: 'var(--bg-primary)',
            border: '1px solid var(--border-color)',
            borderRadius: 12,
            padding: 16,
          }}
        >
          <div>
            <label htmlFor="triggerUrl" style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>
              Trigger Endpoint URL
            </label>
            <input
              id="triggerUrl"
              name="triggerUrl"
              type="text"
              value={triggerUrl}
              onChange={(e) => setTriggerUrl(e.target.value)}
              placeholder="https://api.example.com/migration/trigger"
              style={inputStyle(errors.triggerUrl)}
              aria-invalid={!!errors.triggerUrl}
              aria-describedby={errors.triggerUrl ? 'triggerUrl-error' : undefined}
            />
            {errors.triggerUrl && (
              <div id="triggerUrl-error" style={errorTextStyle}>
                {errors.triggerUrl}
              </div>
            )}
            <div style={helpTextStyle}>
              The POST endpoint that starts a migration job.
            </div>
          </div>

          <div>
            <label htmlFor="logsUrl" style={{ display: 'block', fontWeight: 600, marginBottom: 6 }}>
              Logs Endpoint URL
            </label>
            <input
              id="logsUrl"
              name="logsUrl"
              type="text"
              value={logsUrl}
              onChange={(e) => setLogsUrl(e.target.value)}
              placeholder="https://api.example.com/migration/logs"
              style={inputStyle(errors.logsUrl)}
              aria-invalid={!!errors.logsUrl}
              aria-describedby={errors.logsUrl ? 'logsUrl-error' : undefined}
            />
            {errors.logsUrl && (
              <div id="logsUrl-error" style={errorTextStyle}>
                {errors.logsUrl}
              </div>
            )}
            <div style={helpTextStyle}>
              The GET endpoint for retrieving migration logs.
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <h2 style={{ margin: 0, fontSize: 16 }}>Task Parameters</h2>
              <button
                type="button"
                className="btn"
                onClick={addParamRow}
                aria-label="Add parameter row"
              >
                + Add Parameter
              </button>
            </div>
            {errors.params && <div style={errorTextStyle}>{errors.params}</div>}

            <div
              role="table"
              aria-label="Task parameters"
              style={{
                border: '1px solid var(--border-color)',
                borderRadius: 8,
                overflow: 'hidden',
              }}
            >
              <div
                role="row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 3fr 120px',
                  gap: 8,
                  background: 'var(--bg-secondary)',
                  padding: '10px 12px',
                  fontWeight: 700,
                  color: 'var(--text-secondary)',
                }}
              >
                <div role="columnheader">Key</div>
                <div role="columnheader">Value</div>
                <div role="columnheader">Actions</div>
              </div>

              {params.map((row, idx) => {
                const rowHasError =
                  !row.key && String(row.value ?? '').trim() !== '';
                return (
                  <div
                    key={idx}
                    role="row"
                    style={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 3fr 120px',
                      gap: 8,
                      padding: '10px 12px',
                      borderTop: '1px solid var(--border-color)',
                      alignItems: 'center',
                    }}
                  >
                    <input
                      type="text"
                      placeholder="e.g. sourceSystem"
                      value={row.key}
                      onChange={(e) => updateParamRow(idx, 'key', e.target.value)}
                      style={inputStyle(rowHasError)}
                    />
                    <input
                      type="text"
                      placeholder="e.g. CRM"
                      value={row.value}
                      onChange={(e) => updateParamRow(idx, 'value', e.target.value)}
                      style={inputStyle(false)}
                    />
                    <div>
                      <button
                        type="button"
                        className="btn"
                        onClick={() => removeParamRow(idx)}
                        aria-label={`Remove parameter row ${idx + 1}`}
                        style={{ background: '#6b7280' }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={helpTextStyle}>
              Add any parameters your migration backend expects. Values are saved as text and automatically coerced to boolean/number when used.
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <button type="submit" className="btn">Save Settings</button>
            <button type="button" className="btn" onClick={handleClear} style={{ background: '#b91c1c' }}>
              Clear
            </button>
            {saveState.message && (
              <div
                role="status"
                style={{
                  alignSelf: 'center',
                  color: saveState.status === 'error' ? '#b91c1c' : 'seagreen',
                  fontWeight: 600,
                }}
              >
                {saveState.message}
              </div>
            )}
            <div className="spacer" />
            {lastSavedAt && (
              <div style={{ alignSelf: 'center', color: 'var(--text-secondary)' }}>
                Last saved: {lastSavedAt.toLocaleString()}
              </div>
            )}
          </div>
        </div>
      </form>

      <div style={{ marginTop: 20, color: 'var(--text-secondary)' }}>
        Current saved settings are used throughout the app (Trigger Migration and Migration Logs).
      </div>
    </section>
  );
}

const inputStyle = (hasError) => ({
  width: '100%',
  padding: '10px 12px',
  borderRadius: 8,
  border: `1px solid ${hasError ? '#b91c1c' : 'var(--border-color)'}`,
  background: 'var(--bg-primary)',
  color: 'var(--text-primary)',
  outline: 'none',
});

const errorTextStyle = {
  marginTop: 6,
  color: '#b91c1c',
  fontWeight: 600,
};

const helpTextStyle = {
  marginTop: 6,
  color: 'var(--text-secondary)',
  fontSize: 13,
};

export default Settings;
