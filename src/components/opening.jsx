// OpeningPage.jsx
import React, { useEffect, useRef, useState } from 'react';


const OpeningPage = ({ onComplete }) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  const logoRef = useRef(null);
  const lineRef = useRef(null);
  const textElements = useRef([]);
  const backgroundShapes = useRef([]);

  useEffect(() => {
    // Animation sequence
    const timeline = async () => {
      // Start with background shapes animation
      backgroundShapes.current.forEach((shape, index) => {
        setTimeout(() => {
          shape.classList.add('active');
        }, index * 200);
      });

      // Animate line
      setTimeout(() => {
        if (lineRef.current) lineRef.current.classList.add('active');
      }, 600);

      // Animate logo
      setTimeout(() => {
        if (logoRef.current) logoRef.current.classList.add('active');
      }, 1200);

      // Animate text elements sequentially
      textElements.current.forEach((element, index) => {
        setTimeout(() => {
          if (element) element.classList.add('active');
        }, 1800 + (index * 300));
      });

      // Complete animation and transition to main site
      setTimeout(() => {
        setAnimationComplete(true);
        if (onComplete) {
          setTimeout(() => {
            onComplete();
          }, 1000); // Allow for fade-out animation
        }
      }, 4000);
    };

    timeline();
  }, [onComplete]);

  return (
    <div className={`opening-container ${animationComplete ? 'fade-out' : ''}`}>
      {/* Background animated shapes */}
      <div className="background-shapes">
        {[...Array(6)].map((_, index) => (
          <div 
            key={index}
            ref={el => (backgroundShapes.current[index] = el)}
            className={`shape shape-${index + 1}`}
          ></div>
        ))}
      </div>

      {/* Central content */}
      <div className="content-container">
        {/* Animated line */}
        <div className="animated-line" ref={lineRef}></div>
        
        {/* Logo and text */}
        <div className="logo-container" ref={logoRef}>
          <div className="logo-symbol">⌂</div>
          <div className="logo-text">Architectstudio</div>
        </div>

       {/* Slogan */}
<div className="tagline" ref={el => (textElements.current[0] = el)}>
  Räume neu gedacht für eine moderne Welt
</div>

{/* Beschreibung */}
<p className="description" ref={el => (textElements.current[1] = el)}>
  Innovatives Architekturbüro mit Fokus auf nachhaltige Planung, 
  urbane Entwicklung und transformative Innenraumgestaltung.
</p>

        {/* CTA Button */}
        <button 
          className="enter-button" 
          ref={el => (textElements.current[2] = el)}
          onClick={() => {
            setAnimationComplete(true);
            if (onComplete) setTimeout(onComplete, 800);
          }}
        >
          Betrete Studio
          <span className="button-arrow">→</span>
        </button>
      </div>
    </div>
  );
};

export default OpeningPage;