import React, { useState } from 'react';
import { Award, ShieldCheck, Cloud, Terminal, Database, X, ExternalLink } from 'lucide-react';
import '../index.css';

export default function Certificates() {
  const [activeCert, setActiveCert] = useState(null);

  const certData = [
    {
      id: 'CERT-0X1A',
      title: 'C++ Programming: OOPs and DSA',
      issuer: 'CSE Pathshala',
      Icon: Terminal,
      color: 'var(--cyan)',
      link: 'https://drive.google.com/file/d/1J88GWAOO4CyH0RkjXrgrt6Naemag362l/view?usp=sharing',
      desc: 'Certified proficiency in advanced object-oriented paradigms, and the rigorous implementation of complex data structures and algorithms using modern C++ architectures.'
    },
    {
      id: 'CERT-0X2B',
      title: 'Cloud Computing',
      issuer: 'NPTEL',
      Icon: Cloud,
      color: '#ffaa00', 
      link: 'https://drive.google.com/file/d/1gptf-fAkq1DTz5NFBoi6BsnO_wSVbbEf/view?usp=sharing',
      desc: 'Comprehensive certification on cloud infrastructure, distributed systems, virtualization, and the deployment of scalable instances across hybrid environments.'
    },
    {
      id: 'CERT-0X3C',
      title: 'Ethical Hacking',
      issuer: 'Code Sprint',
      Icon: ShieldCheck,
      color: '#00ff66',
      link: 'https://drive.google.com/file/d/1HG_2eORlVc4pnC2cxBBkL_eyX6N_rCsu/view?usp=sharing',
      desc: 'Validated expertise in network security, vulnerability assessment methodologies, penetration testing, and securing web applications against modern cyber threats.'
    },
    {
      id: 'CERT-0X4D',
      title: 'Python for Data Science',
      issuer: 'Board Infinity',
      Icon: Database,
      color: 'var(--purple)',
      link: 'https://drive.google.com/file/d/1nTeTN_PkzTwF_22JbbkhPdzBarb6j7ZJ/view?usp=sharing',
      desc: 'Advanced credential in data wrangling, statistical analysis, and machine learning algorithm execution using Pandas, NumPy, and Scikit-Learn pipelines.'
    }
  ];

  return (
    <section id="certificates" className="logs-container">
      <div className="logs-header">
        <div className="header-left">
          <div className="section-subtitle-container">
            <span className="section-subtitle">CREDENTIAL_VAULT</span>
          </div>
          <h2 className="section-title">
            Verified<br/>
            <span className="cyan-text">Certifications</span>
          </h2>
          <p className="projects-desc" style={{ marginTop: '16px' }}>
            Cryptographically sealed and verified technical credentials.
          </p>
        </div>
      </div>

      <div className="cert-accordion-container">
         {certData.map((cert) => {
            const Icon = cert.Icon;
            return (
               <div key={cert.id} className="cert-panel" style={{ '--cert-color': cert.color }}>
                  
                  {/* Vertical Collapsed State */}
                  <div className="panel-collapsed">
                     <Icon size={40} className="col-icon" />
                     <div className="col-title">{cert.title}</div>
                     <div className="col-id">{cert.id}</div>
                  </div>

                  {/* Expanded Active State */}
                  <div className="panel-expanded">
                     <div className="exp-watermark">
                       <Icon size={250} strokeWidth={1} />
                     </div>
                     <div className="exp-content">
                        <div className="exp-header">
                           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                             <div className="exp-chip"></div>
                             <div className="cert-status-light" style={{ backgroundColor: cert.color, boxShadow: `0 0 10px ${cert.color}` }}></div>
                           </div>
                           <div className="exp-issuer">[{cert.issuer}]</div>
                        </div>
                        <div className="exp-body">
                           <h3 className="exp-title">{cert.title}</h3>
                           <p className="exp-desc">{cert.desc}</p>
                        </div>
                        <div className="exp-footer">
                           <span className="exp-id">{cert.id}</span>
                           <a 
                             href={cert.link} 
                             target="_blank" 
                             rel="noopener noreferrer" 
                             className="cert-verify-btn" 
                             style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center' }}
                           >
                             VERIFY_CREDENTIAL <ExternalLink size={12} style={{ marginLeft: '6px' }} />
                           </a>
                        </div>
                     </div>
                  </div>

               </div>
            );
         })}
      </div>

      {activeCert && (
        <div className="modal-overlay" onClick={() => setActiveCert(null)}>
          <div className="os-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: '800px', height: '70vh' }}>
            <div className="modal-title-bar">
              <span>{activeCert.id}_VIEWER.EXE</span>
              <X size={14} className="modal-close" onClick={() => setActiveCert(null)} />
            </div>
            <div className="modal-content" style={{ padding: '0', display: 'flex', flexDirection: 'column' }}>
               <div className="cv-document-viewer" style={{ border: 'none', background: '#111' }}>
                 <div style={{ textAlign: 'center', color: 'var(--text-muted)' }}>
                   <activeCert.Icon size={48} style={{ margin: '0 auto 20px auto', color: activeCert.color, opacity: 0.5 }} />
                   [ENCRYPTED_IMAGE_PLACEHOLDER]<br/><br/>
                   Credential: {activeCert.title}<br/>
                   Issuer: {activeCert.issuer}
                 </div>
               </div>
               <div className="modal-footer" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                 <button className="btn-download" onClick={() => setActiveCert(null)}>
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
