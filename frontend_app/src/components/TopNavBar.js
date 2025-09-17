import React from 'react';

/**
 * PUBLIC_INTERFACE
 * TopNavBar
 * A simple sticky top navigation bar with app branding and a theme toggle button.
 */
function TopNavBar({ onToggleTheme, theme }) {
  return (
    <header className="top-navbar" role="banner" aria-label="Top navigation">
      <div className="brand">
        <span className="brand-badge">DMS</span>
        <span>Data Migration Management System</span>
      </div>
      <div className="spacer" />
      <button
        type="button"
        className="btn"
        onClick={onToggleTheme}
        aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      >
        {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>
    </header>
  );
}

export default TopNavBar;
