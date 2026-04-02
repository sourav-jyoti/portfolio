import React, { useState, useEffect } from 'react';
import { User, FileText, Cpu, Folder, Target, Award, GraduationCap, Mail, SignalHigh } from 'lucide-react';
import './index.css';

import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certificates from './components/Certificates';
import Education from './components/Education';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  const [activePage, setActivePage] = useState('about');

  const navItems = [
    { id: 'about', label: 'ABOUT' },
    { id: 'resume', label: 'RESUME' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'training', label: 'TRAINING' },
    { id: 'certificates', label: 'CERTS' },
    { id: 'education', label: 'EDU' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const sidebarItems = [
    { id: 'about', Icon: User },
    { id: 'resume', Icon: FileText },
    { id: 'skills', Icon: Cpu },
    { id: 'projects', Icon: Folder },
    { id: 'training', Icon: Target },
    { id: 'certificates', Icon: Award },
    { id: 'education', Icon: GraduationCap },
    { id: 'contact', Icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      let currentActive = activePage;
      
      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = section.id;
          }
        }
      }
      if (currentActive !== activePage) {
        setActivePage(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage, navItems]);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <CustomCursor />
      <div className="glow-bg" />
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-logo">nj.dev</div>
        <div className="navbar-center">
          {navItems.map(item => (
            <span
              key={item.id}
              className={`navbar-link ${activePage === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </span>
          ))}
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
          {sidebarItems.map(item => (
            <div
              key={item.id}
              className={`sidebar-btn ${activePage === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              <item.Icon size={22} strokeWidth={activePage === item.id ? 2.5 : 2} />
            </div>
          ))}
        </aside>

        <div className="content-area">
          <div id="about" className="scroll-section"><About /></div>
          <div id="resume" className="scroll-section"><Resume /></div>
          <div id="skills" className="scroll-section"><Skills /></div>
          <div id="projects" className="scroll-section"><Projects /></div>
          <div id="training" className="scroll-section"><Training /></div>
          <div id="certificates" className="scroll-section"><Certificates /></div>
          <div id="education" className="scroll-section"><Education /></div>
          <div id="contact" className="scroll-section"><Contact /></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div>©2026 nj.dev // LAT: 40.7128 N LON: 74.0060 W</div>
        <div className="footer-links">
          <span style={{ color: 'var(--cyan)', letterSpacing: '2px', fontWeight: 'bold' }}>AUTHOR - SouravJyoti Dutta</span>
        </div>
      </footer>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      `}} />
    </>
  );
}

export default App;
