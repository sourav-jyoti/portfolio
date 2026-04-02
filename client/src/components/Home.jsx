import React from 'react';

export default function Home() {
  return (
    <section id="home" className="hero-container">
      {/* Left Column */}
      <div className="hero-left">
        <div className="hero-status-row">
          <span className="status-badge">STATUS: OPERATING</span>
          <span className="status-line" />
          <span className="status-text">EST. 2024 // V6.0.2</span>
        </div>

        <h1 className="hero-title">
          <span className="white-text">BUILD<span className="line"></span>THE</span>
          <span className="gradient-text">FUTURE</span>
        </h1>

        <div className="hero-buttons">
          <button className="btn-primary">INITIALIZE_CORE</button>
          <button className="btn-secondary">ACCESS_NODES</button>
        </div>

        <div className="hero-stats">
          <div className="stat-box">
            <label>LATENCY_INDEX</label>
            <div className="val">0.024ms</div>
          </div>
          <div className="stat-box">
            <label>THROUGHPUT_RATE</label>
            <div className="val purple">12.8TB/s</div>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="hero-visual">
        <div className="diamond-graphic">
          <div className="diamond-inner" />
          <div className="diamond-content">
            {/* 3D placeholder was removed to prevent render crash */}
          </div>
        </div>

        <div className="terminal-box">
          <div className="term-header">
            <div><span className="brand">PRISM_CORE_V6</span>&nbsp;&nbsp;|&nbsp;&nbsp;SESSION_ID: 88-X91</div>
            <div className="dot" />
          </div>
          <div className="term-line ok"><span className="ts">[0.001]</span> System BIOS check... <strong>SUCCESS</strong></div>
          <div className="term-line"><span className="ts">[0.042]</span> Loading neural_engine.sh...</div>
          <div className="term-line hl"><span className="ts" style={{color: '#d8b4fe'}}>[0.128]</span> <span className="msg">Mapping spectral_mesh_v3</span></div>
          <div className="term-line"><span className="ts">[0.215]</span> Handshaking with satellite_node_01</div>
          <div className="term-prompt">&gt; Initializing prism interface...<span style={{animation: 'blink 1s step-end infinite', marginLeft: '2px'}}>_</span></div>
        </div>
      </div>
    </section>
  );
}
