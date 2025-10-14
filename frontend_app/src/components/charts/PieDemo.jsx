import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

/**
 * PUBLIC_INTERFACE
 * PieDemo
 * A simple, responsive Pie chart component using Recharts.
 * Renders a legend, tooltip, and labels. Accepts optional data and color props.
 */
function PieDemo({ data, colors, innerRadius = 50, outerRadius = 80 }) {
  const sampleData = [
    { name: 'Category A', value: 400 },
    { name: 'Category B', value: 300 },
    { name: 'Category C', value: 300 },
    { name: 'Category D', value: 200 }
  ];

  const chartData = Array.isArray(data) && data.length > 0 ? data : sampleData;
  const palette =
    Array.isArray(colors) && colors.length > 0
      ? colors
      : [
          '#2563eb', // accent
          '#16a34a', // green
          '#eab308', // yellow
          '#dc2626', // red
          '#9333ea', // purple
          '#0ea5e9'  // cyan
        ];

  return (
    <div
      style={{
        width: '100%',
        height: 360,
        border: '1px solid var(--border-color)',
        background: 'var(--bg-primary)',
        borderRadius: 12,
        padding: 12
      }}
      role="img"
      aria-label="Pie chart visualization"
    >
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={palette[index % palette.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieDemo;
