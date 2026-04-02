import React from 'react';
import { Briefcase, GraduationCap, MonitorPlay, Network, GitMerge, Cpu, ShieldAlert } from 'lucide-react';
import '../index.css';

export default function Logs() {
  return (
    <section id="logs" className="logs-container">
      
      {/* Header */}
      <div className="logs-header">
        <div className="header-left">
          <div className="section-subtitle-container">
            <span className="section-subtitle">SYSTEM ANALYTICS // V6.0.4</span>
          </div>
          <h2 className="section-title">
            Career & Academic<br/>
            <span className="cyan-text">Logs</span>
          </h2>
        </div>
        <div className="header-right">
          <div className="metric-box">
            <label>ACTIVE_NODES</label>
            <div className="val cyan-text">24</div>
          </div>
          <div className="metric-box">
            <label>SYSTEM_UPTIME</label>
            <div className="val purple-text">99.9%</div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-wrapper">
        <div className="timeline-line">
          <div className="line-gradient" />
        </div>

        {/* Item 1 */}
        <div className="timeline-item">
          <div className="t-content left">
            <div className="time-badge cyan-bg">2022 - PRESENT</div>
            <h3 className="t-title">PRINCIPAL SYSTEMS ARCHITECT</h3>
            <p className="t-desc">
              Orchestrating high-scale distributed infrastructures using PRISM_CORE protocols. Led the transition to autonomous deployment vectors.
            </p>
            <div className="t-tags justify-end">
              <span className="t-tag">RUST</span>
              <span className="t-tag">KUBERNETES</span>
              <span className="t-tag">WASM</span>
            </div>
          </div>
          <div className="t-node-container">
            <div className="t-node cyan-node"><Briefcase size={14} className="cyan-text" /></div>
          </div>
          <div className="t-meta right">
            <div className="meta-label">NODE_ID: 0x8F2</div>
            <div className="meta-val cyan-text">LAT: 34.0522° N // LON: 118.2437° W</div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="timeline-item reverse">
          <div className="t-meta left">
            <div className="meta-label text-right">LOG_ID: ARC_04</div>
            <div className="meta-val purple-text text-right">VERIFIED_CREDENTIAL_SECURE</div>
          </div>
          <div className="t-node-container">
            <div className="t-node purple-node"><GraduationCap size={14} className="purple-text" /></div>
          </div>
          <div className="t-content right text-left">
            <div className="time-badge purple-bg">2019 - 2022</div>
            <h3 className="t-title">PH.D. NEURAL COMPUTATION</h3>
            <p className="t-desc">
              Specialized in emergent behaviors within large-scale neural networks. Published 4 papers on ethical recursion in synthetic intelligence.
            </p>
            <div className="t-tags justify-start purple-border">
              <span className="t-tag">THESIS_A+</span>
              <span className="t-tag">DEAN'S_LIST</span>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="timeline-item">
          <div className="t-content left">
            <div className="time-badge cyan-bg">2017 - 2019</div>
            <h3 className="t-title">LEAD FULL-STACK ENGINEER</h3>
            <p className="t-desc">
              Developing immersive terminal interfaces for high-security fintech applications. Built the core component library used across 12 product lines.
            </p>
            <div className="t-tags justify-end">
              <span className="t-tag">REACT</span>
              <span className="t-tag">TYPESCRIPT</span>
              <span className="t-tag">GO</span>
            </div>
          </div>
          <div className="t-node-container">
            <div className="t-node cyan-node"><MonitorPlay size={14} className="cyan-text" /></div>
          </div>
          <div className="t-meta right">
            <div className="meta-label">NODE_ID: 0x2A1</div>
            <div className="meta-val cyan-text">REMOTE_SYNC // GLOBAL_EDGE</div>
          </div>
        </div>

      </div>

      {/* CORE_DRIVE Grid */}
      <div className="core-drive-wrapper">
        <div className="core-main-box">
          <h2 className="core-title">CORE_DRIVE</h2>
          <p className="core-subtitle">MASTERY OF THE UNDERLYING PROTOCOLS</p>
        </div>
        <div className="core-subgrid">
          <div className="core-skill-box">
            <span className="s-label">DATA_STRUC</span>
            <Network size={20} className="s-icon" />
          </div>
          <div className="core-skill-box">
            <span className="s-label">ALGORITHMS</span>
            <GitMerge size={20} className="s-icon" />
          </div>
          <div className="core-skill-box">
            <span className="s-label">SYSTEMS_OP</span>
            <Cpu size={20} className="s-icon" />
          </div>
          <div className="core-skill-box">
            <span className="s-label">PROTOCOL_V1</span>
            <ShieldAlert size={20} className="s-icon" />
          </div>
        </div>
      </div>
      
    </section>
  );
}
