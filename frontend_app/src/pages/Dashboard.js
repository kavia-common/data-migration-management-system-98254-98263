import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Dashboard
 * Overview page showing a high-level summary of migration status.
 */
function Dashboard() {
  return (
    <section className="page" aria-labelledby="dashboard-title">
      <h1 id="dashboard-title">Dashboard</h1>
      <p className="description">
        Welcome back! Here’s a quick overview of your migration activity.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 16 }}>
        <div className="card" style={{ border: '1px solid var(--border-color)', borderRadius: 10, padding: 16, background: 'var(--bg-primary)' }}>
          <h3 style={{ marginTop: 0 }}>Total Migrations</h3>
          <div style={{ fontSize: 28, fontWeight: 700 }}>12</div>
          <div style={{ color: 'var(--text-secondary)' }}>All-time</div>
        </div>
        <div className="card" style={{ border: '1px solid var(--border-color)', borderRadius: 10, padding: 16, background: 'var(--bg-primary)' }}>
          <h3 style={{ marginTop: 0 }}>Running</h3>
          <div style={{ fontSize: 28, fontWeight: 700 }}>0</div>
          <div style={{ color: 'var(--text-secondary)' }}>Currently active</div>
        </div>
        <div className="card" style={{ border: '1px solid var(--border-color)', borderRadius: 10, padding: 16, background: 'var(--bg-primary)' }}>
          <h3 style={{ marginTop: 0 }}>Successful</h3>
          <div style={{ fontSize: 28, fontWeight: 700, color: 'seagreen' }}>10</div>
          <div style={{ color: 'var(--text-secondary)' }}>Last 30 days</div>
        </div>
        <div className="card" style={{ border: '1px solid var(--border-color)', borderRadius: 10, padding: 16, background: 'var(--bg-primary)' }}>
          <h3 style={{ marginTop: 0 }}>Failed</h3>
          <div style={{ fontSize: 28, fontWeight: 700, color: 'crimson' }}>2</div>
          <div style={{ color: 'var(--text-secondary)' }}>Last 30 days</div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
