import React from 'react';
import Button from '../UI/Button';
import './AboutHeader.css';

const AboutHeader = () => {
  const handleDocsClick = () => {
    window.open('https://docs.example.com', '_blank');
  };

  const handleSupportClick = () => {
    window.open('https://support.example.com', '_blank');
  };

  const handleChangelogClick = () => {
    window.open('https://changelog.example.com', '_blank');
  };

  return (
    <div className="about-header">
      <div className="about-title-section">
        <div className="about-icon">👤</div>
        <div className="about-title-info">
          <h1>User Manager</h1>
          <p>A web-based system for managing users, activity, and permissions</p>
          <span className="version">Version 1.4.2</span>
        </div>
      </div>
      <div className="about-header-buttons">
        <Button variant="outline" size="sm" onClick={handleDocsClick}>
          📄 Docs
        </Button>
        <Button variant="outline" size="sm" onClick={handleSupportClick}>
          🛟 Support
        </Button>
        <Button variant="outline" size="sm" onClick={handleChangelogClick}>
          📝 Changelog
        </Button>
      </div>
    </div>
  );
};

export default AboutHeader;