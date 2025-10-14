import React from 'react';
import PieDemo from '../components/charts/PieDemo.jsx';

/**
 * PUBLIC_INTERFACE
 * PieChartPage
 * Page that displays a sample Pie chart using Recharts within the existing dashboard layout.
 * Uses the shared styles to match the app's look and feel.
 */
function PieChartPage() {
  const data = [
    { name: 'Completed', value: 10 },
    { name: 'Failed', value: 2 },
    { name: 'Pending', value: 3 }
  ];

  return (
    <section className="page" aria-labelledby="piechart-title">
      <h1 id="piechart-title">Pie Chart</h1>
      <p className="description">
        A sample visualization demonstrating how migration outcomes can be represented using a Pie chart.
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 16,
          marginTop: 16
        }}
      >
        <div
          className="card"
          style={{
            border: '1px solid var(--border-color)',
            borderRadius: 12,
            background: 'var(--bg-primary)',
            padding: 16
          }}
        >
          <h2 style={{ marginTop: 0, marginBottom: 8, fontSize: 18 }}>Migration Outcome Distribution</h2>
          <PieDemo data={data} />
        </div>
      </div>
    </section>
  );
}

export default PieChartPage;
