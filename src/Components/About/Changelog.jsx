import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import Badge from '../UI/Badge';
import './Changelog.css';

const Changelog = () => {
  const versions = [
    { version: '1.4.2', description: 'Improved user search performance and fixed table rendering.' },
    { version: '1.4.1', description: 'Added bulk deactivate to User List.' },
    { version: '1.4.0', description: 'Introduced new Add/Edit form with validation panel.' }
  ];

  return (
    <Card className="changelog">
      <div className="section-header">
        <h3>Changelog</h3>
        <Button variant="link" size="sm">Recent</Button>
      </div>
      <div className="changelog-list">
        {versions.map((item, index) => (
          <div key={index} className="changelog-item">
            <Badge variant="info">{item.version}</Badge>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Changelog;