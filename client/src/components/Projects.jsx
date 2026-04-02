import React from 'react';
import { LayoutGrid, Library, Lock, Satellite, Globe, ShieldCheck } from 'lucide-react';
import '../index.css';

export default function Projects() {
  const [expandedId, setExpandedId] = React.useState(null);

  const projects = [
    {
      id: "PRJ-001",
      title: "AMS – Adaptive Management Suite",
      icon: <LayoutGrid size={16} className="cyan-text" /> ,
      image: "/ams-bg.png",
      link: "https://ams-adaptive-management-suite.onrender.com",
      desc: [
        "Built a scalable Rag based to store all your bookmarsk, tweets , notes.",
      ],
      tags: ["MERN", "Nextjs", "Framer Motion"],
      status: "ONLINE"
    },
    {
      id: "PRJ-002",
      title: "Ketch – Collaborative WhiteBoard",
      icon: <Library size={16} className="cyan-text" />,
      image: "/ketch-bg.png",
      link: "https://ketch-82i7.onrender.com",
      desc: [
        "Developed a scalable collaborative virtual studio for low-latency multi-user synchronization.",
        "Structured a drawing environment with text, geometric shapes, flood fill, and secure JWT auth.",
        "Integrated seamless WebRTC video conferencing, screen sharing, and real-time chat."
      ],
      tags: ["MERN", "Socket.io", "WebRTC"],
      status: "ACTIVE"
    },
    {
      id: "PRJ-003",
      title: "MoveWise – Smart Traffic System",
      icon: <Globe size={16} className="cyan-text" />,
      image: "/movewise-bg.png",
      link: "https://movewise-app.onrender.com",
      desc: [
        "Architected a scalable system enabling real-time monitoring, reporting, and route planning.",
        "Constructed a live bidirectional Socket.io pipeline to push traffic incidents and signal changes.",
        "Formulated an interactive analytics suite and admin dashboard equipped with Chart.js."
      ],
      tags: ["MERN", "Mapbox GL JS", "Socket.io", "JWT"],
      status: "DEPLOYED"
    },
    {
      id: "PRJ-004",
      title: "Openmrs - EHMS",
      icon: <Satellite size={16} className="cyan-text" />,
      image: "/f1sync-bg.png",
      desc: [
        "Active contributor to Openmrs used by 22M+ patients and Doctor world wide",

      ],
      tags: ["React", "SCSS", "Typescript", "springboot","turborepo","playwright"],
      status: "ONLINE"
    },
    {
      id: "PRJ-005",
      title: "Digital Confession Wall",
      icon: <Lock size={16} className="cyan-text" />,
      image: "/confess-bg.png",
      desc: [
        "Secure, visually immersive platform for sharing anonymous secrets with strict OAuth spam prevention.",
        "Features extensive skeuomorphic UI textures like torn paper, coffee stains, and glossy polaroids.",
        "Includes interactive physics-based pinning, real-time reactions, and dynamic hand-drawn analytics."
      ],
      tags: ["React", "Framer Motion", "MongoDB", "Auth"],
      status: "ACTIVE"
    },
    {
      id: "PRJ-006",
      title: "ShrinkMe – File Compression",
      icon: <LayoutGrid size={16} className="cyan-text" />,
      image: "/shrinkme-bg.png",
      desc: [
        "High-performance file compression utility utilizing Huffman Coding algorithms to drastically reduce payload sizes.",
        "Architected a dual-stack solution featuring an intuitive React interface and a rapid Python backend.",
        "Engineered strict data encoding/decoding pipelines mathematically ensuring 100% lossless compression."
      ],
      tags: ["Python", "React", "Huffman Coding", "Algorithms"],
      status: "DEPLOYED"
    }
  ];

  return (
    <section id="vault" className="projects-container">
      
      {/* Top Section */}
      <div className="projects-top">
        <div className="vault-status">SYSTEM STATUS: PROJECTS ACCESSIBLE</div>
        <h2 className="projects-title">
          My <span className="cyan-text">Projects</span>
        </h2>
        <p className="projects-desc">
          Collection of neural-link deployed environments and cryptographic visual systems.<br/>
          V6 Architecture enabled for high-fidelity extraction.
        </p>
      </div>

      {/* Central Visual */}
      <div className="vault-central-visual">
        <div className="wireframe-cube-container">
          <div className="wireframe-cube">
            <div className="cube-face front"></div>
            <div className="cube-face back"></div>
            <div className="cube-face right"></div>
            <div className="cube-face left"></div>
            <div className="cube-face top"></div>
            <div className="cube-face bottom"></div>
          </div>
        </div>
        <div className="vault-label">VAULT_CORE_ROTATION_ACTIVE</div>
      </div>

      {/* Grid Section */}
      <div className="projects-grid">
        {projects.map((proj, index) => {
          const isExpanded = expandedId === proj.id;

          return (
            <div key={index} className="project-card-wrapper">
              
            <div 
              className={`project-card ${isExpanded ? 'expanded' : ''}`}
              onClick={() => setExpandedId(isExpanded ? null : proj.id)}
            >
              <div 
                className="card-image-placeholder"
                style={proj.image ? { backgroundImage: `url(${proj.image})`, backgroundSize: 'cover', backgroundPosition: 'top center' } : {}}
              >
                <div className="card-id-badge">ID: {proj.id}</div>
                <div className="image-overlay-effect" />
                
                {/* Overlay Title - Visible only when collapsed */}
                <div className="card-overlay-title">
                  <div className="card-title-row">
                    <h3 className="card-title-text">{proj.title}</h3>
                    {proj.icon}
                  </div>
                  <div className="expand-hint">
                    CLICK TO EXPAND <span className="arrow">»</span>
                  </div>
                </div>

              </div>

              {/* Collapsed Hidden Details - Blooms open when active */}
              <div className="card-content">
                <div className="card-title-row" style={{ paddingBottom: '16px', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <h3 className="card-title-text">{proj.title}</h3>
                  {proj.icon}
                </div>
                
                <div className="card-desc-text">
                  <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {Array.isArray(proj.desc) ? proj.desc.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    )) : <li>{proj.desc}</li>}
                  </ul>
                </div>
                
                <div className="card-tech">
                  {proj.tags.map((tag, i) => (
                    <span key={i} className="tech-badge">{tag}</span>
                  ))}
                </div>

                {proj.link ? (
                  <a 
                    href={proj.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-view-artifact" 
                    style={{ textDecoration: 'none', display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    VIEW DEPLOYMENT
                  </a>
                ) : (
                  <button className="btn-view-artifact" onClick={(e) => e.stopPropagation()} style={{ opacity: 0.5, cursor: 'not-allowed' }}>
                    AWAITING DEPLOYMENT
                  </button>
                )}
              </div>
            </div>
            </div>
          );
        })}
      </div>

    </section>
  );
}
