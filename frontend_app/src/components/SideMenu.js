import React from 'react';
import { NavLink } from 'react-router-dom';

/**
 * PUBLIC_INTERFACE
 * SideMenu
 * Permanent side navigation menu for dashboard sections.
 */
function SideMenu() {
  return (
    <aside className="sidebar" aria-label="Sidebar navigation">
      <nav>
        <ul className="menu">
          <li className="menu-item">
            <NavLink to="/dashboard" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              🧭 Dashboard
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/trigger" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              ▶️ Trigger Migration
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/logs" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              📜 Migration Logs
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink to="/settings" className={({ isActive }) => (isActive ? 'active' : undefined)}>
              ⚙️ Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideMenu;
