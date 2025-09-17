import React, { useMemo, useState } from 'react';
import {
  getTriggerEndpoint,
  getParamsObject,
  addHistoryEntry,
  getSettings
} from '../utils/settings';

/**
 * PUBLIC_INTERFACE
 * TriggerMigration
 * Page for initiating a data migration using the configured backend settings.
 * - Reads Trigger endpoint and task parameters from localStorage (Settings).
 * - Sends a POST request with JSON payload (parameters object).
 * - Stores the response result as a history entry in localStorage for display in Migration Logs.
 */
function TriggerMigration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');

  const settings = useMemo(() => getSettings(), []);
  const triggerEndpoint = getTriggerEndpoint();
  const paramsObject = useMemo(() => getParamsObject(settings.params), [settings]);

  const handleTrigger = async () => {
    setIsSubmitting(true);
    setResult('');
    setError('');

    if (!triggerEndpoint) {
      const msg = 'Trigger endpoint is not configured. Please set it in Settings.';
      setIsSubmitting(false);
      setError(msg);
      addHistoryEntry({
        endpoint: '',
        method: 'POST',
        requestPayload: paramsObject,
        httpStatus: null,
        ok: false,
        statusText: 'NOT_CONFIGURED',
        status: 'failed',
        message: msg,
        error: msg,
        responseData: null
      });
      return;
    }

    try {
      const resp = await fetch(triggerEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(paramsObject)
      });

      // Try to parse JSON; fall back to text if needed
      let data = null;
      let text = '';
      try {
        data = await resp.clone().json();
      } catch {
        try {
          text = await resp.text();
        } catch {
          text = '';
        }
      }

      const ok = resp.ok;
      const message = ok
        ? 'Migration job request submitted successfully.'
        : `Request failed with status ${resp.status}.`;

      addHistoryEntry({
        endpoint: triggerEndpoint,
        method: 'POST',
        requestPayload: paramsObject,
        httpStatus: resp.status,
        ok,
        statusText: resp.statusText,
        status: ok ? 'success' : 'failed',
        message,
        error: ok ? null : (data && (data.error || data.message)) || text || 'Unknown error',
        responseData: data || text
      });

      setIsSubmitting(false);
      if (ok) {
        setResult(message);
      } else {
        setError(message);
      }
    } catch (e) {
      const errMsg = `Network error: ${e.message || 'Unable to reach the endpoint.'}`;
      addHistoryEntry({
        endpoint: triggerEndpoint,
        method: 'POST',
        requestPayload: paramsObject,
        httpStatus: null,
        ok: false,
        statusText: 'NETWORK_ERROR',
        status: 'failed',
        message: errMsg,
        error: e.message || String(e),
        responseData: null
      });
      setIsSubmitting(false);
      setError(errMsg);
    }
  };

  return (
    <section className="page" aria-labelledby="trigger-title">
      <h1 id="trigger-title">Trigger Migration</h1>
      <p className="description">
        This action will call your configured Trigger endpoint with the saved task parameters.
      </p>

      <div
        style={{
          marginTop: 12,
          padding: 12,
          borderRadius: 8,
          border: '1px solid var(--border-color)',
          background: 'var(--bg-primary)'
        }}
      >
        <div style={{ marginBottom: 8, color: 'var(--text-secondary)' }}>
          Using endpoint:
          <div style={{ fontFamily: 'monospace', marginTop: 4 }}>
            {triggerEndpoint || <span style={{ color: '#b91c1c' }}>(not configured)</span>}
          </div>
        </div>
        <div style={{ marginBottom: 8, color: 'var(--text-secondary)' }}>
          Payload preview:
          <pre
            style={{
              margin: 0,
              marginTop: 6,
              padding: 12,
              borderRadius: 8,
              background: 'var(--bg-secondary)',
              overflow: 'auto'
            }}
          >
            {JSON.stringify(paramsObject, null, 2)}
          </pre>
        </div>
        <button className="btn" onClick={handleTrigger} disabled={isSubmitting}>
          {isSubmitting ? 'Submitting…' : 'Trigger Migration'}
        </button>
      </div>

      {result && (
        <div
          role="status"
          style={{
            marginTop: 16,
            padding: 12,
            borderRadius: 8,
            border: '1px solid var(--border-color)',
            color: 'seagreen',
            fontWeight: 600,
            background: 'var(--bg-primary)'
          }}
        >
          {result}
        </div>
      )}

      {error && (
        <div
          role="alert"
          style={{
            marginTop: 16,
            padding: 12,
            borderRadius: 8,
            border: '1px solid var(--border-color)',
            color: '#b91c1c',
            fontWeight: 600,
            background: 'var(--bg-primary)'
          }}
        >
          {error}
        </div>
      )}
    </section>
  );
}

export default TriggerMigration;
