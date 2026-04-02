import React, { useState, useRef } from 'react';
import { Settings } from 'lucide-react'; // Placeholder icons for now
import '../index.css';

export default function About() {

  return (
    <section id="about" className="about-container">
      
      {/* Top Row: Title and Diamond */}
      <div className="about-top">
        <div className="section-header">
        <div className="section-subtitle-container">
          <div className="subtitle-line"></div>
          <span className="section-subtitle">PERSONAL_PROFILE_LOADED</span>
        </div>
        <h2 className="section-title" style={{ fontSize: 'clamp(50px, 6vw, 80px)', marginBottom: '30px' }}>
          About <br />
          <span className="cyan-text">Me.</span>
        </h2>
        
        {/* Professional About Card */}
        <div className="profile-card">
          {/* Animated gradient border shimmer */}
          <div className="profile-card-shimmer" />
          {/* Subtle left accent bar */}
          <div className="profile-card-accent" />

          {/* Top: Avatar + Status */}
          <div className="profile-card-top">
            <div className="profile-avatar">
              <span>SJ.</span>
            </div>
            <div className="profile-status">
              <span className="status-dot" />
              AVAILABLE
            </div>
          </div>

          {/* Name + Title */}
          <div className="profile-identity">
            <h3 className="profile-name">Souravjyoti Dutta</h3>
            <p className="profile-title">Software Engineer</p>
          </div>

          {/* Divider */}
          <div className="profile-divider" />

          {/* Bio */}
          <p className="profile-bio">
            I am a passionate <strong>Full-Stack Software Engineer</strong> driven by the desire to architect scalable, highly efficient, and user-centric digital solutions. With a strong foundation in modern web development and algorithmic problem-solving, I thrive on tackling complex engineering challenges. I continually adapt to cutting-edge industry trends, leveraging <span className="cyan-text">MERN stack</span> and <strong>C++</strong> to build robust applications from the ground up.
          </p>

          {/* Tech Stack Tags */}
          <div className="profile-stack">
            {['React', 'Node.js', 'MongoDB', 'C++'].map((tech, i) => (
              <span key={tech} className="stack-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>

        <div className="about-visual">
          <div className="system-flow-container">
            <svg className="flow-svg" viewBox="0 0 300 200">
              <defs>
                <linearGradient id="flow-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(0, 255, 255, 0.4)" />
                  <stop offset="50%" stopColor="rgba(255, 255, 255, 0.5)" />
                  <stop offset="100%" stopColor="rgba(157, 78, 221, 0.4)" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>

              {/* The Infinity Path */}
              <path 
                id="flow-path"
                className="flow-path"
                d="M 150,100 
                   C 200,10 280,10 280,100 
                   C 280,190 200,190 150,100 
                   C 100,10 20,10 20,100 
                   C 20,190 100,190 150,100 Z"
              />

              {/* Left Node: Client */}
              <circle cx="20" cy="100" r="18" className="node-ring frontend-ring" />
              <text x="20" y="103" className="node-text">UI</text>

              {/* Right Node: Server */}
              <circle cx="280" cy="100" r="18" className="node-ring backend-ring" />
              <text x="280" y="103" className="node-text">DB</text>

              {/* Center Node: API */}
              <circle cx="150" cy="100" r="24" className="node-ring core-ring" />
              <text x="150" y="103" className="node-text cyan-text">API</text>

              {/* Data Packet 1: Request */}
              <circle r="4" className="packet-req" filter="url(#glow)">
                <animateMotion dur="6s" repeatCount="indefinite">
                  <mpath href="#flow-path" />
                </animateMotion>
              </circle>

              {/* Data Packet 2: Response */}
              <circle r="4" className="packet-res" filter="url(#glow)">
                <animateMotion dur="6s" begin="3s" repeatCount="indefinite">
                  <mpath href="#flow-path" />
                </animateMotion>
              </circle>
            </svg>

            <div className="flow-label">
              <span className="dot-pulse"></span> SYSTEM_ARCHITECTURE_ACTIVE
            </div>
          </div>
        </div>
      </div>

      {/* Visual Analytics Grid */}
      <div className="about-simple-grid">
        
        {/* Progress Bars */}
        <div className="about-card analytics-card">
          <div className="ac-header">
            <h3 className="ac-title">STACK_UTILIZATION</h3>
            <span className="live-indicator">LIVE</span>
          </div>
          
          <div className="metrics-container">
            <div className="metric-row">
              <div className="metric-labels"><span>BACKEND / NODE.JS</span> <span className="cyan-text">95%</span></div>
              <div className="metric-bar-bg"><div className="metric-bar-fill cyan-bg" style={{width: '95%'}}></div></div>
            </div>
            <div className="metric-row">
              <div className="metric-labels"><span>PROGRAMMING / C++ & JS</span> <span className="purple-text">90%</span></div>
              <div className="metric-bar-bg"><div className="metric-bar-fill purple-bg" style={{width: '90%'}}></div></div>
            </div>
            <div className="metric-row">
              <div className="metric-labels"><span>DATABASE / MONGODB</span> <span className="magenta-text">85%</span></div>
              <div className="metric-bar-bg"><div className="metric-bar-fill magenta-bg" style={{width: '85%'}}></div></div>
            </div>
            <div className="metric-row">
              <div className="metric-labels"><span>FRONTEND / REACT.JS</span> <span className="cyan-text">80%</span></div>
              <div className="metric-bar-bg"><div className="metric-bar-fill cyan-bg" style={{width: '80%'}}></div></div>
            </div>
          </div>
        </div>

        {/* Circular / Radial Chart */}
        <div className="about-card analytics-card center-align">
          <div className="ac-header" style={{width: "100%", justifyContent: "center"}}>
            <h3 className="ac-title text-center" style={{paddingBottom: 0, borderBottom: "none", marginBottom: 0}}>FULL_STACK_CAPACITY</h3>
          </div>
          <div className="radial-chart-container">
            <svg viewBox="0 0 120 120" className="radial-chart">
              {/* Background rings */}
              <circle cx="60" cy="60" r="50" className="ring-bg" />
              <circle cx="60" cy="60" r="35" className="ring-bg" />
              {/* Foreground rings */}
              <circle cx="60" cy="60" r="50" className="ring-fill cyan-stroke outer-ring" />
              <circle cx="60" cy="60" r="35" className="ring-fill purple-stroke inner-ring" />
            </svg>
            <div className="radial-center-text">
              <span className="rc-val">1+</span>
              <span className="rc-label">YEARS EXP</span>
            </div>
          </div>
          <div className="chart-legend">
            <div className="legend-item"><span className="dot cyan-bg"></span> BACKEND (88%)</div>
            <div className="legend-item"><span className="dot purple-bg"></span> FRONTEND (75%)</div>
          </div>
        </div>

        {/* Agent Profile Map */}
        <div className="about-card analytics-card">
          <div className="ac-header">
            <h3 className="ac-title">AGENT_PROFILE</h3>
            <span className="live-indicator">ACTIVE</span>
          </div>
          <div className="radar-container">
            <svg viewBox="0 0 100 100" className="radar-svg">
               <circle cx="50" cy="50" r="45" stroke="var(--cyan)" strokeWidth="1" fill="none" opacity="0.3" />
               <circle cx="50" cy="50" r="25" stroke="var(--cyan)" strokeWidth="1" fill="none" opacity="0.3" />
               <circle cx="50" cy="50" r="5" fill="var(--cyan)" opacity="0.5" />
               <line x1="50" y1="5" x2="50" y2="95" stroke="var(--cyan)" strokeWidth="1" opacity="0.3" />
               <line x1="5" y1="50" x2="95" y2="50" stroke="var(--cyan)" strokeWidth="1" opacity="0.3" />
               
               {/* Radar Blip */}
               <circle cx="70" cy="30" r="4" fill="var(--cyan)" className="radar-blip" />
               
               {/* Scanning Beam */}
               <path d="M50,50 L50,5 A45,45 0 0,1 95,50 Z" fill="var(--cyan)" opacity="0.1" />
            </svg>
            <div className="radar-text-box">
              <div className="rt-line"><span className="purple-text">»</span> TRACKING_GEO_LOC</div>
              <div className="rt-line">LAT: 26.4712° N</div>
              <div className="rt-line">LNG: 90.5606° E</div>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-val cyan-text">GEO</div>
              <div className="stat-label">ASSAM, INDIA</div>
            </div>
            <div className="stat-box">
              <div className="stat-val purple-text">LOC</div>
              <div className="stat-label">BARPARA, BONGAIGAON</div>
            </div>
            <div className="stat-box">
              <div className="stat-val magenta-text">ROLE</div>
              <div className="stat-label">SOFTWARE_ENGR</div>
            </div>
            <div className="stat-box">
              <div className="stat-val">STS</div>
              <div className="stat-label">OPEN_TO_WORK</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
