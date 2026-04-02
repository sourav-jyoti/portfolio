import React from 'react';
import { Terminal, Database, Layout, Wrench, Brain } from 'lucide-react';
import '../index.css';

export default function Skills() {
  const skillCategories = [
    {
      title: 'CORE_LANGUAGES',
      icon: Terminal,
      color: 'var(--cyan)',
      skills: [
        { name: 'C++', glow: '#00E5FF' },
        { name: 'Python', glow: '#FFD43B' },
        { name: 'Java', glow: '#ED8B00' },
        { name: 'C', glow: '#A8B9CC' },
        { name: 'PHP', glow: '#777BB4' }
      ]
    },
    {
      title: 'FRONTEND_ECOSYSTEM',
      icon: Layout,
      color: 'var(--purple)',
      skills: [
        { name: 'React.js', glow: '#61DAFB' },
        { name: 'Next.js', glow: '#FFFFFF' },
        { name: 'Tailwind CSS', glow: '#06B6D4' },
        { name: 'Three.js', glow: '#FFFFFF' }
      ]
    },
    {
      title: 'BACKEND_AND_DATABASES',
      icon: Database,
      color: 'var(--magenta)',
      skills: [
        { name: 'Node.js', glow: '#339933' },
        { name: 'Express.js', glow: '#FFFFFF' },
        { name: 'MongoDB', glow: '#47A248' },
        { name: 'MySQL', glow: '#4479A1' },
        { name: 'PostgreSQL', glow: '#336791' }
      ]
    },
    {
      title: 'TOOLING_RESOURCES',
      icon: Wrench,
      color: 'var(--cyan)',
      skills: [
        { name: 'Git & GitHub', glow: '#F05032' },
        { name: 'Figma', glow: '#F24E1E' },
        { name: 'Postman', glow: '#FF6C37' },
        { name: 'Google Stitch', glow: '#4285F4' }
      ]
    },
    {
      title: 'CORE_ATTRIBUTES',
      icon: Brain,
      color: 'var(--purple)',
      skills: [
        { name: 'Problem-Solving', glow: '#00FFFF' },
        { name: 'Teamwork', glow: '#00FFFF' },
        { name: 'Communication', glow: '#9D4EDD' },
        { name: 'Continuous Learning', glow: '#9D4EDD' }
      ]
    }
  ];

  return (
    <section id="skills" className="logs-container">
      <div className="logs-header">
        <div className="header-left">
          <div className="section-subtitle-container">
            <span className="section-subtitle">CAPABILITY_MATRIX</span>
          </div>
          <h2 className="section-title">
            Technical<br/>
            <span className="cyan-text">Skills</span>
          </h2>
          <p className="projects-desc" style={{ marginTop: '16px' }}>
            Live datastream of structural paradigms and processing frameworks.
          </p>
        </div>
      </div>

      <div className="tech-highway-wrapper">
        {skillCategories.map((cat, i) => (
          <div key={i} className={`tech-lane ${i % 2 === 0 ? 'move-left' : 'move-right'}`}>
             <div className="marquee-track">
                {[...Array(6)].map((_, trackIdx) => (
                  <div key={trackIdx} className="tech-segment">
                     <div className="cat-badge-card" style={{ '--cat-color': cat.color }}>
                       <cat.icon size={16} />
                       <span>{cat.title}</span>
                     </div>
                     
                     {cat.skills.map((skill, sIdx) => (
                       <div 
                         key={sIdx} 
                         className="tech-card-block"
                         style={{ '--brand-color': skill.glow }}
                       >
                         <span className="tech-led"></span>
                         <span className="tech-card-name">{skill.name}</span>
                       </div>
                     ))}
                  </div>
                ))}
             </div>
          </div>
        ))}
      </div>
    </section>
  );
}
