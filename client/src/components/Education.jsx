import React, { useState, useEffect } from 'react';
import { MapPin, Target } from 'lucide-react';
import '../index.css';

export default function Education() {
  const [activeNode, setActiveNode] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Slight delay to trigger CSS transitions after initial paint
    setTimeout(() => setMounted(true), 150);
  }, []);

  const eduData = [
    {
      id: 3,
      node: 'btech',
      title: 'BACHELOR OF TECHNOLOGY (CSE)',
      school: 'Lovely Professional University',
      location: 'Phagwara, Punjab',
      date: '2021 - 2027',
      scoreLabel: 'CGPA',
      scoreValue: '8.36',
      percentage: 77,
      color: 'var(--magenta)',
      status: 'IN PROGRESS'
    },
    {
      id: 2,
      node: '12th',
      title: 'INTERMEDIATE (12TH)',
      school: 'Bongaigaon H.S. School (E.M.)',
      location: 'Bongaigaon, Assam',
      scoreLabel: 'PERCENTAGE',
      scoreValue: '92%',
      percentage: 92,
      color: 'var(--purple)',
      status: 'GRADUATED'
    },
    {
      id: 1,
      node: '10th',
      title: 'MATRICULATION (10TH)',
      school: 'Bongaigaon H.S. School (E.M.)',
      location: 'Bongaigaon, Assam',
      scoreLabel: 'PERCENTAGE',
      scoreValue: '91.6%',
      percentage: 91.6,
      color: 'var(--cyan)',
      status: 'GRADUATED'
    }
  ];

  return (
    <section id="education" className="logs-container">
      <div className="logs-header">
        <div className="header-left">
          <div className="section-subtitle-container">
            <span className="section-subtitle">ACADEMIC_RECORD</span>
          </div>
          <h2 className="section-title">
            Formal<br/>
            <span className="cyan-text">Education</span>
          </h2>
          <p className="projects-desc" style={{ marginTop: '16px' }}>
            Orbital tracking of institutional degrees, highlighting percentage distributions and foundational geolocation data.
          </p>
        </div>
      </div>

      <div className="edu-orbital-layout">
        
        {/* Left: The Concentric HUD Core */}
        <div className="edu-hud-core">
          <svg className="hud-rings" viewBox="0 0 500 500">
            {/* Background Tracks (Segmented Radar style) */}
            <circle cx="250" cy="250" r="110" className="ring-track" strokeDasharray="4 6" />
            <circle cx="250" cy="250" r="160" className="ring-track" strokeDasharray="2 8" />
            <circle cx="250" cy="250" r="210" className="ring-track" strokeDasharray="8 4" />

            {/* Inner Ring (10th) */}
            <circle cx="250" cy="250" r="110" 
              className={`ring-fill ${activeNode === 1 ? 'ring-active' : ''}`}
              pathLength="100"
              strokeDasharray="100"
              strokeDashoffset={mounted ? 100 - eduData[2].percentage : 100}
              stroke={eduData[2].color}
            />
            {/* Middle Ring (12th) */}
            <circle cx="250" cy="250" r="160" 
              className={`ring-fill ${activeNode === 2 ? 'ring-active' : ''}`}
              pathLength="100"
              strokeDasharray="100"
              strokeDashoffset={mounted ? 100 - eduData[1].percentage : 100}
              stroke={eduData[1].color}
            />
            {/* Outer Ring (BTech) */}
            <circle cx="250" cy="250" r="210" 
              className={`ring-fill ${activeNode === 3 ? 'ring-active' : ''}`}
              pathLength="100"
              strokeDasharray="100"
              strokeDashoffset={mounted ? 100 - eduData[0].percentage : 100}
              stroke={eduData[0].color}
            />

            {/* Decorative Crosshairs / Radar Vectors */}
            <line x1="250" y1="20" x2="250" y2="35" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="250" y1="465" x2="250" y2="480" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="20" y1="250" x2="35" y2="250" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            <line x1="465" y1="250" x2="480" y2="250" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
          </svg>

          {/* Central Data Readout */}
          <div className="hud-center-readout">
             {activeNode ? (
               <div className="readout-data fade-in">
                 <span className="rd-val" style={{ color: eduData.find(d => d.id === activeNode).color }}>
                   {eduData.find(d => d.id === activeNode).scoreValue}
                 </span>
                 <span className="rd-lbl">{eduData.find(d => d.id === activeNode).scoreLabel}</span>
               </div>
             ) : (
               <div className="readout-idle fade-in">
                 <Target size={30} className="cyan-text" opacity={0.4} />
                 <span>AWAITING<br/>DATA_LINK</span>
               </div>
             )}
          </div>
        </div>

        {/* Right: The Modular Data Blades */}
        <div className="edu-modules-panel">
          {eduData.map((node) => (
            <div 
              key={node.id}
              className={`edu-hud-module ${activeNode === node.id ? 'module-active' : ''}`}
              onMouseEnter={() => setActiveNode(node.id)}
              onMouseLeave={() => setActiveNode(null)}
              style={{ '--node-color': node.color }}
            >
              
              <div className="mod-content">
                 <div className="mod-header">
                    <span className="mod-year">{node.date}</span>
                    <span className="mod-status">{node.status}</span>
                 </div>
                 <h3 className="mod-title">{node.title}</h3>
                 <p className="mod-school">{node.school}</p>
                 <div className="mod-footer">
                    <span className="mod-loc"><MapPin size={12} className="loc-ic" /> {node.location}</span>
                    <span className="mod-score">{node.scoreLabel}: <strong style={{color: node.color}}>{node.scoreValue}</strong></span>
                 </div>
              </div>
              
              <div className="mod-glow-layer"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
