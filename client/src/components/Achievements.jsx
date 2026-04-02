import React from 'react';
import '../index.css';

export default function Achievements() {
  return (
    <section className="logs-container">
      <div className="logs-header">
        <div className="header-left">
          <div className="section-subtitle-container">
            <span className="section-subtitle">MILESTONES_UNLOCKED</span>
          </div>
          <h2 className="section-title">
            Notable<br/>
            <span className="cyan-text">Achievements</span>
          </h2>
        </div>
      </div>
      <div className="projects-desc">
        Significant milestones and honors to be accessed upon secure uplink.
      </div>
    </section>
  );
}
