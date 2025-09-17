import React from 'react';

/**
 * PUBLIC_INTERFACE
 * MigrationLogs
 * Shows a list of recent migration logs (placeholder data).
 */
function MigrationLogs() {
  const logs = [
    { id: 1, time: '2025-09-17 10:15', status: 'SUCCESS', details: 'Users table migrated' },
    { id: 2, time: '2025-09-16 17:42', status: 'FAILED', details: 'Orders: network timeout' },
    { id: 3, time: '2025-09-16 09:03', status: 'SUCCESS', details: 'Products table migrated' },
  ];

  return (
    <section className="page" aria-labelledby="logs-title">
      <h1 id="logs-title">Migration Logs</h1>
      <div style={{ marginTop: 12, border: '1px solid var(--border-color)', borderRadius: 8, overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '180px 120px 1fr', padding: '10px 12px', fontWeight: 600, background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)' }}>
          <div>Timestamp</div>
          <div>Status</div>
          <div>Details</div>
        </div>
        {logs.map((row) => (
          <div key={row.id} style={{ display: 'grid', gridTemplateColumns: '180px 120px 1fr', padding: '10px 12px', borderBottom: '1px solid var(--border-color)' }}>
            <div>{row.time}</div>
            <div style={{ color: row.status === 'SUCCESS' ? 'seagreen' : 'crimson', fontWeight: 700 }}>{row.status}</div>
            <div>{row.details}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MigrationLogs;
