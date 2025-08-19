import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeItem, onItemClick }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'user-list', label: 'User List', icon: '📋' },
    { id: 'add-edit-user', label: 'Add/Edit User', icon: '👤' },
    { id: 'about', label: 'About', icon: 'ℹ️' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h3>Menu</h3>
      </div>
      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`sidebar-item ${activeItem === item.id ? 'active' : ''}`}
            onClick={() => onItemClick(item.id)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;