import React, { useEffect, useRef, useState } from 'react';
import '../index.css';

export default function CustomCursor() {
  const outlineRef = useRef(null);
  const dotRef = useRef(null);
  
  // Physics states 
  const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  const pos = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
  
  const [hoverState, setHoverState] = useState('default'); 
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      setIsVisible(true);
      
      const target = e.target;
      
      // Determine what section or element is being hovered
      if (
        target.closest('a') || 
        target.closest('button') || 
        target.closest('.sidebar-btn') || 
        target.closest('.navbar-link') || 
        target.closest('.social-link-card') || 
        target.closest('.project-card') ||
        target.closest('.cert-panel')
      ) {
        setHoverState('hover');
      } else if (target.closest('#projects')) {
        setHoverState('projects');
      } else if (target.closest('#about')) {
        setHoverState('about');
      } else if (target.closest('#skills')) {
        setHoverState('skills');
      } else if (target.closest('#contact')) {
        setHoverState('contact');
      } else {
        setHoverState('default');
      }
    };

    let rafId;
    const render = () => {
      // Lerp logic for fluid drag/gravity effect (lower value = far more fluid/drag)
      pos.current.x += (mouse.current.x - pos.current.x) * 0.1;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.1;
      
      // Distance calculation for expansion/contraction stretch
      const dx = mouse.current.x - pos.current.x;
      const dy = mouse.current.y - pos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Velocity-based stretching logic
      const scaleX = Math.min(Math.max(1 + distance * 0.015, 1), 3);
      const scaleY = Math.max(1 - distance * 0.005, 0.3);
      
      // Rotation angle based on movement trajectory
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      if (outlineRef.current) {
        outlineRef.current.style.transform = `translate(calc(${pos.current.x}px - 50%), calc(${pos.current.y}px - 50%)) rotate(${angle}deg) scale(${scaleX}, ${scaleY})`;
      }
      
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(calc(${mouse.current.x}px - 50%), calc(${mouse.current.y}px - 50%))`;
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className={`cursor-dot ${hoverState}`} ref={dotRef} />
      <div className={`cursor-outline ${hoverState}`} ref={outlineRef} />
    </>
  );
}
