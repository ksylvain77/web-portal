import React from 'react';
import '../styles/LandingPage.css';

const LandingPage: React.FC = () => {
  return (
    <div className="deathstar-bg">
      <img 
        src="/src/assets/ds_bg.png" 
        alt="Death Star" 
        className="deathstar-image"
      />
      <div className="text-container">
        <h1>VADER FLIX</h1>
        <h4 style={{ 
          color: '#FF0000', 
          textAlign: 'center', 
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.2em'
        }}>
          THE EMPIRE'S ENTERTAINMENT
        </h4>
        <p style={{ 
          color: '#CCCCCC',
          textAlign: 'center' 
        }}>
          You have failed me for the last time. Your weak streaming services are no match for the power of the Dark Side.
        </p>
        <p style={{ 
          color: '#CCCCCC',
          textAlign: 'center' 
        }}>
          Submit to the Empire's superior collection. Resistance is futile.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="https://overseerr.vaderflix.synology.me" className="enter-btn">
            ⚔ OBEY
          </a>
        </div>
      </div>
    </div>
  );
};

export default LandingPage; 