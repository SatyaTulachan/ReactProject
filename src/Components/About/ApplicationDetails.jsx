import React from 'react';
import Card from '../UI/Card';
import Badge from '../UI/Badge';
import './ApplicationDetails.css';

const ApplicationDetails = () => (
  <Card className="application-details">
    <div className="section-header">
      <h3>Application Details</h3>
      <Badge variant="success">Stable</Badge>
    </div>
    <div className="details-grid">
      <div className="detail-item">
        <span className="detail-label">Build</span>
        <span className="detail-value">2025.08.15-3472</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">Environment</span>
        <span className="detail-value">Production</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">API Status</span>
        <span className="detail-value">Operational</span>
      </div>
      <div className="detail-item">
        <span className="detail-label">License</span>
        <span className="detail-value">Company Use</span>
      </div>
    </div>
  </Card>
);

export default ApplicationDetails;