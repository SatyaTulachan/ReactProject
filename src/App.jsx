import React, { useState } from 'react';
import Sidebar from './Components/Sidebar/Sidebar';
import AboutPage from './Components/About/AboutPage';
import './App.css';

const App = () => {
  const [activeItem, setActiveItem] = useState('about');

  const handleShare = () => {
    // Copy current URL to clipboard
    navigator.clipboard.writeText(window.location.href);
    alert('Link copied to clipboard!');
  };

  const handleWhatsNew = () => {
    window.open('https://github.com/your-repo/releases', '_blank');
  };

  return (
    <div className="app">
      <Sidebar activeItem={activeItem} onItemClick={setActiveItem} />
      <main className="main-content">
        <div className="content-header">
          <div className="breadcrumb">
            <span>About</span>
          </div>
          <div className="header-actions">
            <button 
              className="btn btn-outline btn-sm" 
              onClick={handleShare}
            >
              🔗 Share
            </button>
            <button 
              className="btn btn-primary btn-sm" 
              onClick={handleWhatsNew}
            >
              ✨ What's New
            </button>
          </div>
        </div>
        <div className="content-body">
          {activeItem === 'about' && <AboutPage />}
          {activeItem === 'dashboard' && (
            <div className="placeholder-content">
              <h2>Dashboard</h2>
              <p>Dashboard content will be implemented here.</p>
            </div>
          )}
          {activeItem === 'user-list' && (
            <div className="placeholder-content">
              <h2>User List</h2>
              <p>User list content will be implemented here.</p>
            </div>
          )}
          {activeItem === 'add-edit-user' && (
            <div className="placeholder-content">
              <h2>Add/Edit User</h2>
              <p>Add/edit user form will be implemented here.</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;