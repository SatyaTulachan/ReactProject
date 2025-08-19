import React from 'react';
import Card from '../UI/Card';
import './Resources.css';

const Resources = () => {
  const resources = [
    {
      icon: '📖',
      name: 'User Guide',
      type: 'PDF',
      url: 'https://docs.google.com/document/d/your-user-guide'
    },
    {
      icon: '🚀',
      name: 'Onboarding',
      type: 'Video',
      url: 'https://youtube.com/watch?v=your-onboarding-video'
    },
    {
      icon: '⚡',
      name: 'API Reference',
      type: 'Docs',
      url: 'https://api-docs.example.com'
    }
  ];

  const handleResourceClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <Card className="resources">
      <h3>Resources</h3>
      <div className="resources-list">
        {resources.map((resource, index) => (
          <div 
            key={index} 
            className="resource-item clickable"
            onClick={() => handleResourceClick(resource.url)}
          >
            <span className="resource-icon">{resource.icon}</span>
            <span className="resource-name">{resource.name}</span>
            <span className="resource-type">{resource.type}</span>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Resources;