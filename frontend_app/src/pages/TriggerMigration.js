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
 * - Supports POST (JSON body) and GET (query string) based on a special parameter key.
 *   Specify one of: httpMethod | method | _method | __method in Settings params.
 *   Value is case-insensitive; defaults to POST. Only GET and POST are supported.
 * - Stores the response result as a history entry in localStorage for display in Migration Logs.
 */
function TriggerMigration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');
  const [error, setError] = useState('');
  const [lastRequestUrl, setLastRequestUrl] = useState('');

  // Load current settings and endpoint
  const settings = useMemo(() => getSettings(), []);
  const triggerEndpoint = getTriggerEndpoint();

  // Determine HTTP method from params (default POST)
  const httpMethod = useMemo(() => {
    const arr = Array.isArray(settings.params) ? settings.params : [];
    const methodKeys = ['httpmethod', 'method', '_method', '__method'];
    const methodRow = arr.find(
      (p) => methodKeys.includes(String(p.key || '').trim().toLowerCase())
    );
    const m = String((methodRow && methodRow.value) || 'POST').toUpperCase();
    return m === 'GET' ? 'GET' : 'POST';
  }, [settings]);

  // Build payload object from params excluding reserved method keys
  const payloadObject = useMemo(() => {
    const arr = Array.isArray(settings.params) ? settings.params : [];
    const reservedKeys = new Set(['httpmethod', 'method', '_method', '__method']);
    const filtered = arr.filter(
      (p) => !reservedKeys.has(String(p.key || '').trim().toLowerCase())
    );
    // Coercion (booleans/numbers) handled by getParamsObject
    return getParamsObject(filtered);
  }, [settings]);

  // Build a preview of the request URL (for GET we include query string)
  const computedUrlPreview = useMemo(() => {
    if (!triggerEndpoint) return '';
    if (httpMethod !== 'GET') return triggerEndpoint;
    try {
      const u = new URL(triggerEndpoint, window.location.href);
      Object.entries(payloadObject).forEach(([k, v]) => {
        u.searchParams.append(k, String(v));
      });
      return u.toString();
    } catch {
      // Fallback if URL constructor fails (e.g., malformed or non-standard)
      const qs = new URLSearchParams(
        Object.entries(payloadObject).map(([k, v]) => [k, String(v)])
      ).toString();
      return triggerEndpoint + (triggerEndpoint.includes('?') ? '&' : '?') + qs;
    }
  }, [triggerEndpoint, httpMethod, payloadObject]);

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
        requestUrl: '',
        method: httpMethod,
        requestPayload: payloadObject,
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

    // Prepare request URL and options based on method
    let requestUrl = triggerEndpoint;
    const options = { method: httpMethod };

    if (httpMethod === 'GET') {
      try {
        const u = new URL(triggerEndpoint, window.location.href);
        Object.entries(payloadObject).forEach(([k, v]) => {
          u.searchParams.append(k, String(v));
        });
        requestUrl = u.toString();
      } catch {
        const qs = new URLSearchParams(
          Object.entries(payloadObject).map(([k, v]) => [k, String(v)])
        ).toString();
        requestUrl = triggerEndpoint + (triggerEndpoint.includes('?') ? '&' : '?') + qs;
      }
    } else {
      options.headers = { 'Content-Type': 'application/json' };
      options.body = JSON.stringify(payloadObject);
    }

    try {
      const resp = await fetch(requestUrl, options);

      // Try to parse JSON; fall back to text
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
        ? `Migration job request submitted via ${httpMethod}.`
        : `Request via ${httpMethod} failed with status ${resp.status}.`;

      addHistoryEntry({
        endpoint: triggerEndpoint,
        requestUrl,
        method: httpMethod,
        requestPayload: payloadObject,
        httpStatus: resp.status,
        ok,
        statusText: resp.statusText,
        status: ok ? 'success' : 'failed',
        message,
        error: ok ? null : (data && (data.error || data.message)) || text || 'Unknown error',
        responseData: data || text
      });

      setIsSubmitting(false);
      setLastRequestUrl(requestUrl);
      if (ok) {
        setResult(message);
      } else {
        setError(message);
      }
    } catch (e) {
      const errMsg = `Network error: ${e.message || 'Unable to reach the endpoint.'}`;
      addHistoryEntry({
        endpoint: triggerEndpoint,
        requestUrl,
        method: httpMethod,
        requestPayload: payloadObject,
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
          HTTP Method:
          <div style={{ fontFamily: 'monospace', marginTop: 4 }}>
            {httpMethod}
          </div>
        </div>

        {httpMethod === 'GET' && (
          <div style={{ marginBottom: 8, color: 'var(--text-secondary)' }}>
            Computed request URL:
            <div style={{ fontFamily: 'monospace', marginTop: 4, wordBreak: 'break-all' }}>
              {computedUrlPreview}
            </div>
          </div>
        )}

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
            {JSON.stringify(payloadObject, null, 2)}
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

      {lastRequestUrl && (
        <div
          role="note"
          style={{
            marginTop: 16,
            padding: 12,
            borderRadius: 8,
            border: '1px solid var(--border-color)',
            background: 'var(--bg-primary)',
            color: 'var(--text-secondary)'
          }}
        >
          Last request URL:
          <div style={{ fontFamily: 'monospace', marginTop: 4, wordBreak: 'break-all' }}>
            {lastRequestUrl}
          </div>
        </div>
      )}
    </section>
  );
}

export default TriggerMigration;
