import React, { useState } from 'react';

/**
 * PUBLIC_INTERFACE
 * TriggerMigration
 * Page for initiating a data migration (placeholder behavior for now).
 */
function TriggerMigration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState('');

  const handleTrigger = async () => {
    setIsSubmitting(true);
    setResult('');
    // Simulate an async call to backend
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setResult('Migration job has been queued successfully.');
  };

  return (
    <section className="page" aria-labelledby="trigger-title">
      <h1 id="trigger-title">Trigger Migration</h1>
      <p className="description">
        Use the button below to initiate a migration. This is a placeholder action.
      </p>
      <div style={{ marginTop: 16 }}>
        <button className="btn" onClick={handleTrigger} disabled={isSubmitting}>
          {isSubmitting ? 'Queuing…' : 'Trigger Migration'}
        </button>
      </div>
      {result && (
        <div style={{ marginTop: 16, padding: 12, borderRadius: 8, border: '1px solid var(--border-color)' }}>
          {result}
        </div>
      )}
    </section>
  );
}

export default TriggerMigration;
