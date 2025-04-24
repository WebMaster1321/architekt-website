import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Section3 from './section3';

const Home = () => {
  

  const [headingVisible, setHeadingVisible] = useState(false);
  const [subheadingVisible, setSubheadingVisible] = useState(false);
  const [dashboardVisible, setDashboardVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setHeadingVisible(true), 800);
    setTimeout(() => setSubheadingVisible(true), 1200);
    setTimeout(() => setButtonVisible(true), 1500);
    setTimeout(() => setDashboardVisible(true), 1800);
  }, []);

  return (
    <>
      <div className="alphaledger-page">
        {/* ✅ Schlanke Navbar */}
       

        {/* Hero Section */}
        <div className="hero-section">
          <div className="watch-video-button-container">
            <button className={`watch-video-button ${buttonVisible ? 'button-visible' : ''}`}>
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
              </svg>
              Starte das Video
            </button>
          </div>

          <div className="hero-content">
            <h1 className={`main-heading ${headingVisible ? 'heading-visible' : ''}`}>
              Entfalte dein architektonisches Potenzial
            </h1>
            <p className={`subheading ${subheadingVisible ? 'subheading-visible' : ''}`}>
              ArchitectStudio verbindet Visionen mit Gestaltungskraft, 
              präziser Planung und neuen Möglichkeiten.
            </p>
          </div>

          <div className={`dashboard-container ${dashboardVisible ? 'dashboard-visible' : ''}`}>
            <img 
              src="/architekt-website/Bild.png" 
              alt="AlphaLedger Dashboard" 
              className="dashboard-image" 
            />
          </div>
        </div>
      </div>

      <div className='section3-div'>
        <Section3 />
      </div>
    </>
  );
};

export default Home;
