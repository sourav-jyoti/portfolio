import React, { useState } from 'react';
import { BookOpen, X, FileBadge, ChevronRight } from 'lucide-react';
import '../index.css';

export default function Training() {
  const [showCertificate, setShowCertificate] = useState(false);
  const [activeId, setActiveId] = useState(1);

  const trainingData = [
    {
      id: 1,
      title: 'C++ Programming: OOPs and DSA',
      provider: 'CSE Pathshala',
      date: "Jun' 25 – Jul' 25",
      points: [
        'Practiced core OOP concepts – classes, objects, inheritance, polymorphism, abstraction, and encapsulation – while coding in C++.',
        'Implemented essential data structures such as arrays, linked lists, stacks, and queues, and solved DSA problems using recursion, sorting, and searching.',
        'Built a command-line Student Management System with features to add, search, and display student records using OOP principles and file handling.'
      ],
      certificateUrl: 'https://drive.google.com/file/d/1J88GWAOO4CyH0RkjXrgrt6Naemag362l/view' 
    },
    {
      id: 2,
      title: 'Advanced AI & Full-Stack Engineering',
      provider: 'Comprehensive Online Bootcamp',
      date: "In Progress",
      points: [
        'Developing Generative AI applications and autonomous multi-agent workflows using LangChain and Model Context Protocol (MCP) servers.',
        'Architecting scalable Full-Stack infrastructure utilizing React.js, Express, MongoDB, secure REST APIs, and comprehensive CI/CD DevOps pipelines.',
        'Mastering Advanced Data Structures, Object-Oriented Programming, algorithm optimization, and Three.js 3D rendering for high-performance interfaces.'
      ],
      certificateUrl: '/certificate_placeholder_course.pdf'
    }
  ];

  const activeCourse = trainingData.find(t => t.id === activeId);

  return (
    <section id="training" className="logs-container">
      <div className="logs-header">
        <div className="header-left">
          <div className="section-subtitle-container">
            <span className="section-subtitle">ACADEMIC_UPLINK</span>
          </div>
          <h2 className="section-title">
            Security<br/>
            <span className="cyan-text">& Training</span>
          </h2>
          <p className="projects-desc" style={{ marginTop: '16px' }}>
            Verified technical coursework and foundational curriculum records.
          </p>
        </div>
      </div>

      <div className="training-matrix">
         
         {/* Left Column: Data Stream Index */}
         <div className="tm-index-column">
           <div className="tm-index-header">AVAILABLE_DATA_MODULES</div>
           <div className="tm-index-list">
             {trainingData.map(item => (
                <div 
                   key={item.id} 
                   className={`tm-index-item ${activeId === item.id ? 'active' : ''}`}
                   onClick={() => setActiveId(item.id)}
                >
                   <div className="tm-item-id">0{item.id} //</div>
                   <div className="tm-item-title">{item.title}</div>
                   {activeId === item.id && <div className="tm-active-cursor"></div>}
                </div>
             ))}
           </div>
         </div>

         {/* Right Column: Holographic Projection */}
         <div className="tm-hologram-column">
            <div className="tm-hologram-frame">
               <div className="tm-holo-corners"></div>
               
               <div className="tm-holo-content" key={activeId}>
                  <div className="holo-header">
                     <span className="holo-provider">[{activeCourse.provider}]</span>
                     <span className="holo-date">{activeCourse.date}</span>
                  </div>
                  
                  <h3 className="holo-title">{activeCourse.title}</h3>
                  <div className="holo-divider"></div>
                  
                  <div className="holo-points">
                     {activeCourse.points.map((pt, i) => (
                        <div key={i} className="holo-point" style={{ animationDelay: `${i * 0.15}s` }}>
                           <span className="holo-bullet">&gt;&gt;</span>
                           <p>{pt}</p>
                        </div>
                     ))}
                  </div>

                  <div className="holo-actions">
                    {activeCourse.certificateUrl.includes('drive.google.com') ? (
                       <a 
                         href={activeCourse.certificateUrl}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="btn-download"
                         style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                       >
                         INITIATE_CERTIFICATE_RENDER
                       </a>
                    ) : (
                       <button className="btn-download" onClick={() => setShowCertificate(true)}>
                         INITIATE_CERTIFICATE_RENDER
                       </button>
                    )}
                  </div>
               </div>
            </div>
         </div>
         
      </div>

      {showCertificate && (
        <div className="modal-overlay" onClick={() => setShowCertificate(false)}>
          <div className="os-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '800px', height: '70vh' }}>
            <div className="modal-title-bar">
              <span>CERTIFICATE_VIEWER.EXE</span>
              <X size={14} className="modal-close" onClick={() => setShowCertificate(false)} />
            </div>
            <div className="modal-content" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
               <div className="cv-document-viewer" style={{ border: 'none', background: '#111' }}>
                 [IMAGE_OF_CERTIFICATE_WILL_GO_HERE]
               </div>
               <div className="modal-footer" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                 <button className="btn-download" onClick={() => setShowCertificate(false)}>
                   CLOSE_VIEWER
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
