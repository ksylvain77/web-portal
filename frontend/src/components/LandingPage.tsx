import React from 'react';
import '../styles/LandingPage.css';
import { OVERSEERR_URL } from '../config';

const LandingPage: React.FC = () => {
  return (
    <div className="deathstar-bg">
      <div className="deathstar-overlay" />
      <div className="header-container">
        <h1 className="vaderflix-title">VADER FLIX</h1>
        <h4 className="vaderflix-subtitle">
          THE EMPIRE'S ENTERTAINMENT
        </h4>
      </div>
      
      {/* Repositioning the crawl to ensure it's visible on mobile */}
      <div className="crawl-container">
        <div className="crawl">
          <p>
            You have failed me for the last time. Your weak streaming services are no match for the power of the Dark Side.
          </p>
          <p>
            Submit to the Empire's superior collection. Resistance is futile.
          </p>
        </div>
      </div>
      
      <div className="button-container">
        <a href={OVERSEERR_URL} className="enter-btn">
          ⚔ OBEY
        </a>
      </div>

      <div className="tie-image-container">
        <img src={require('../assets/ties.png')} alt="TIE Fighters" className="tie-image" />
      </div>
    </div>
  );
};

export default LandingPage;