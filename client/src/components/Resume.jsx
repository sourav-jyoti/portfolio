import React, { useState } from "react";
import {
  FileText,
  Download,
  X,
  Terminal,
  Briefcase,
  Server,
  Layout,
  Cpu,
} from "lucide-react";
import "../index.css";

export default function Resume() {
  const [selectedCV, setSelectedCV] = useState(null);

  const cvOptions = [
    {
      id: "general",
      title: "GENERAL_CV",
      desc: "Comprehensive overview of all full-stack experiences and generalized skills.",
      badge: "ALL-ENCOMPASSING",
      meta: "NODE_ID: 0x1A4",
      lat: "LAT: 40.7128° N",
      color: "cyan",
      Icon: Briefcase,
    },
    {
      id: "backend",
      title: "BACKEND_ENGINEER",
      desc: "Specialized focus on API architecture, database optimization, and scalable backend systems.",
      badge: "SERVER_CORE",
      meta: "NODE_ID: 0x2B9",
      lat: "LAT: 37.7749° N",
      color: "purple",
      Icon: Server,
    },
    {
      id: "frontend",
      title: "FRONTEND_ENGINEER",
      desc: "Emphasis on React ecosystems, complex UI state management, and CSS architectures.",
      badge: "CLIENT_INTERFACE",
      meta: "NODE_ID: 0x3C2",
      lat: "LAT: 51.5074° N",
      color: "cyan",
      Icon: Layout,
    },
    {
      id: "ai",
      title: "AI_DEVELOPER",
      desc: "Highlighting machine learning integrations, Python infrastructure, and data handling pipelines.",
      badge: "NEURAL_NET",
      meta: "NODE_ID: 0x4D8",
      lat: "LAT: 35.6762° N",
      color: "purple",
      Icon: Cpu,
    },
  ];

  return (
    <section className="logs-container">
      <div className="logs-header">
        <div className="header-left">
          <div className="section-subtitle-container">
            <span className="section-subtitle">DOCUMENT_VAULT</span>
          </div>
          <h2 className="section-title">
            Curriculum
            <br />
            <span className="cyan-text">Vitae</span>
          </h2>
          <p className="projects-desc" style={{ marginTop: "16px" }}>
            Select a targeted resume profile below to access the secure document
            viewer.
          </p>
        </div>
      </div>

      <div className="timeline-wrapper" style={{ marginTop: "40px" }}>
        <div className="timeline-line">
          <div className="line-gradient" />
        </div>

        {cvOptions.map((cv, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={cv.id}
              className={`timeline-item ${!isEven ? "reverse" : ""} cv-timeline-item`}
              onClick={() => setSelectedCV(cv)}
            >
              {!isEven ? (
                <>
                  <div className="t-meta left">
                    <div className="meta-label text-right">{cv.meta}</div>
                    <div className={`meta-val ${cv.color}-text text-right`}>
                      {cv.lat}
                    </div>
                  </div>
                  <div className="t-node-container">
                    <div className={`t-node ${cv.color}-node`}>
                      <cv.Icon size={14} className={`${cv.color}-text`} />
                    </div>
                  </div>
                  <div className="t-content right text-left">
                    <div className={`time-badge ${cv.color}-bg`}>
                      {cv.badge}
                    </div>
                    <h3 className="t-title">{cv.title}</h3>
                    <p className="t-desc">{cv.desc}</p>
                    <div className={`t-tags justify-start ${cv.color}-border`}>
                      <span className="t-tag">ACCESS RECORD</span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="t-content left">
                    <div className={`time-badge ${cv.color}-bg`}>
                      {cv.badge}
                    </div>
                    <h3 className="t-title">{cv.title}</h3>
                    <p className="t-desc">{cv.desc}</p>
                    <div className="t-tags justify-end">
                      <span className="t-tag">ACCESS RECORD</span>
                    </div>
                  </div>
                  <div className="t-node-container">
                    <div className={`t-node ${cv.color}-node`}>
                      <cv.Icon size={14} className={`${cv.color}-text`} />
                    </div>
                  </div>
                  <div className="t-meta right">
                    <div className="meta-label">{cv.meta}</div>
                    <div className={`meta-val ${cv.color}-text`}>{cv.lat}</div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      {selectedCV && (
        <div className="modal-overlay" onClick={() => setSelectedCV(null)}>
          <div className="os-modal" onClick={(e) => e.stopPropagation()}>
            <div className="modal-title-bar">
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <Terminal size={14} className="cyan-text" />
                <span>VIEWING_DOCUMENT // {selectedCV.title}.pdf</span>
              </div>
              <X
                size={16}
                className="modal-close"
                onClick={() => setSelectedCV(null)}
              />
            </div>

            <div className="modal-content">
              <div
                className="cv-document-viewer"
                style={{ padding: 0, overflow: "hidden" }}
              >
                <iframe
                  src="/my_resume.pdf"
                  title={`${selectedCV.title} Document`}
                  width="100%"
                  height="100%"
                  style={{
                    border: "none",
                    minHeight: "60vh",
                    backgroundColor: "#e2e8f0",
                  }}
                />
              </div>
            </div>

            <div className="modal-footer">
              <a
                href="/my_resume.pdf"
                download="my_resume.pdf"
                className="btn-download"
                style={{
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <Download size={14} /> DOWNLOAD_{selectedCV.title}.PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
