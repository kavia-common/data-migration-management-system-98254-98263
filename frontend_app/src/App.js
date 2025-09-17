import React, { useState, useEffect } from 'react';
import './App.css';

/**
 * PUBLIC_INTERFACE
 * App
 * A clean starting point for the Data Migration Management System frontend.
 * Provides a minimal layout and a theme toggle to switch between light and dark modes.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Apply the theme to the root element so CSS variables can update.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  /**
   * PUBLIC_INTERFACE
   * toggleTheme
   * Toggle between 'light' and 'dark' themes.
   */
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className="App">
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>

        <h1>Data Migration Management System</h1>
        <p style={{ marginTop: 8, opacity: 0.85 }}>
          Welcome! Use the controls to manage migrations and review logs.
        </p>
      </header>
    </div>
  );
}

export default App;
