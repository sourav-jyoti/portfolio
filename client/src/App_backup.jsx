import React, { Suspense } from 'react';
import { Monitor, Folder, Database, Mail, SignalHigh } from 'lucide-react';
import './index.css';

import Background3D from './components/Background3D';

function App() {
  return (
    <>
      <div className="glow-bg" />
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">PRISM_OS_V6</div>
        <div className="navbar-center">
          <a href="#root" className="navbar-link active">ROOT</a>
          <a href="#vault" className="navbar-link">VAULT</a>
          <a href="#logs" className="navbar-link">LOGS</a>
        </div>
        <div className="navbar-right">
          <div className="icon-cyan"><SignalHigh size={18} strokeWidth={2.5} /></div>
          <div className="icon-cyan"><Mail size={18} strokeWidth={2.5} /></div>
        </div>
      </nav>

      {/* Main Container */}
      <div className="main-wrapper">
        
        {/* Sidebar */}
        <aside className="sidebar">
          <div className="sidebar-btn active"><Monitor size={22} strokeWidth={2} /></div>
          <div className="sidebar-btn"><Folder size={22} strokeWidth={2} /></div>
          <div className="sidebar-btn"><Database size={22} strokeWidth={2} /></div>
        </aside>

        {/* Hero Content */}
        <main className="hero-container">
          
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
                <Background3D />
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
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div>©2024 PRISM_CORE // LAT: 40.7128 N LON: 74.0060 W</div>
        <div className="footer-links">
          <span>GITHUB</span>
          <span>LINKEDIN</span>
          <span>SOURCE CODE</span>
        </div>
      </footer>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}} />
    </>
  );
}

export default App;
