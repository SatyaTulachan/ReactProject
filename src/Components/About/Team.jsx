import React from 'react';
import Card from '../UI/Card';
import Badge from '../UI/Badge';
import './Team.css';

const Team = () => {
  const teamMembers = [
    { name: 'Alex Johnson', role: 'Project Lead', avatar: '👨‍💼', department: 'Design' },
    { name: 'Priya Singh', role: 'Designer', avatar: '👩‍🎨', department: 'Design' },
    { name: 'Miguel Santos', role: 'Developer', avatar: '👨‍💻', department: 'Web' },
    { name: 'Emma Li', role: 'Backend', avatar: '👩‍💻', department: 'API' },
    { name: 'Noah Kim', role: 'DevOps', avatar: '👨‍🔧', department: 'Sec' },
    { name: 'Sara Ahmed', role: 'Support', avatar: '👩‍💼', department: 'CS' }
  ];

  return (
    <Card className="team">
      <div className="section-header">
        <h3>Team</h3>
        <span className="team-count">6 members</span>
      </div>
      <div className="team-list">
        {teamMembers.map((member, index) => (
          <div key={index} className="team-member">
            <div className="member-info">
              <span className="member-avatar">{member.avatar}</span>
              <div className="member-details">
                <span className="member-name">{member.name}</span>
                <span className="member-role">{member.role}</span>
              </div>
            </div>
            <Badge variant="secondary">{member.department}</Badge>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default Team;