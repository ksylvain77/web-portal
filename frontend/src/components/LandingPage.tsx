import React from 'react';
import '../styles/LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="deathstar-bg">
      <div className="deathstar-overlay" />
      <div className="text-container">
        <h1 style={{ color: '#FF0000', marginBottom: 0 }}>VADER FLIX</h1>
        <h4 style={{ 
          color: '#FF0000', 
          textAlign: 'center', 
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          marginTop: '0.5rem',
          marginBottom: '1.2rem'
        }}>
          THE EMPIRE'S ENTERTAINMENT
        </h4>
        <p style={{ 
          color: '#FF0000',
          textAlign: 'center',
          margin: 0
        }}>
          You have failed me for the last time. Your weak streaming services are no match for the power of the Dark Side.
        </p>
        <p style={{ 
          color: '#FF0000',
          textAlign: 'center',
          margin: 0
        }}>
          Submit to the Empire's superior collection. Resistance is futile.
        </p>
        <a href="https://overseerr.vaderflix.synology.me" className="enter-btn">
          ⚔ OBEY
        </a>
      </div>
    </div>
  );
};

export default LandingPage;