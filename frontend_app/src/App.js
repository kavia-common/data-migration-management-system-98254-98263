import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import TopNavBar from './components/TopNavBar';
import SideMenu from './components/SideMenu';
import Dashboard from './pages/Dashboard';
import TriggerMigration from './pages/TriggerMigration';
import MigrationLogs from './pages/MigrationLogs';
import Settings from './pages/Settings';

/**
 * PUBLIC_INTERFACE
 * App
 * Main application shell for the Data Migration Management System.
 * Includes a top navigation bar, a permanent side menu, and page routing.
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
    <BrowserRouter>
      <div className="app-shell">
        <TopNavBar onToggleTheme={toggleTheme} theme={theme} />
        <div className="shell-content">
          <SideMenu />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/trigger" element={<TriggerMigration />} />
              <Route path="/logs" element={<MigrationLogs />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
