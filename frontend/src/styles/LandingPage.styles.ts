import styled from 'styled-components';
import { Container, Typography, Paper } from '@mui/material';

export const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: radial-gradient(ellipse at bottom, #1B1B1B 0%, #000000 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at center, transparent 0%, rgba(255, 0, 0, 0.1) 50%, transparent 100%);
    animation: vaderBreathing 4s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes vaderBreathing {
    0%, 100% { opacity: 0; transform: scale(0.8); }
    50% { opacity: 0.3; transform: scale(1.2); }
  }
`;

export const Logo = styled(Typography)`
  font-size: 6rem;
  font-weight: 900;
  color: #FF0000;
  text-shadow: 
    0 0 20px #FF0000,
    0 0 40px #8B0000,
    0 0 60px #8B0000,
    0 0 80px #8B0000,
    4px 4px 8px #000000;
  margin-bottom: 2rem;
  text-align: center;
  letter-spacing: 0.3em;
  animation: darkPulse 3s ease-in-out infinite;
  z-index: 1;
  
  @keyframes darkPulse {
    0%, 100% { 
      transform: scale(1);
      filter: brightness(1);
    }
    50% { 
      transform: scale(1.05);
      filter: brightness(1.3);
    }
  }
`;

export const StyledPaper = styled(Paper)`
  padding: 3rem;
  background: 
    /* Superlaser dish */
    radial-gradient(circle at 30% 35%, 
      rgba(255, 0, 0, 0.8) 0%, 
      rgba(139, 0, 0, 0.6) 5%, 
      transparent 5.5%
    ),
    /* Inner dish detail */
    radial-gradient(circle at 30% 35%, 
      transparent 6%, 
      rgba(58, 74, 90, 0.3) 6.5%, 
      transparent 7%
    ),
    /* Trench lines - horizontal */
    linear-gradient(180deg, 
      transparent 48%, 
      rgba(58, 74, 90, 0.4) 48%, 
      rgba(58, 74, 90, 0.4) 48.5%, 
      transparent 48.5%,
      transparent 51.5%, 
      rgba(58, 74, 90, 0.4) 51.5%, 
      rgba(58, 74, 90, 0.4) 52%, 
      transparent 52%
    ),
    /* Trench lines - vertical */
    linear-gradient(90deg, 
      transparent 49%, 
      rgba(58, 74, 90, 0.4) 49%, 
      rgba(58, 74, 90, 0.4) 49.5%, 
      transparent 49.5%,
      transparent 50.5%, 
      rgba(58, 74, 90, 0.4) 50.5%, 
      rgba(58, 74, 90, 0.4) 51%, 
      transparent 51%
    ),
    /* Panel details */
    repeating-linear-gradient(
      45deg,
      transparent,
      transparent 20px,
      rgba(58, 74, 90, 0.1) 20px,
      rgba(58, 74, 90, 0.1) 21px
    ),
    repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 20px,
      rgba(58, 74, 90, 0.1) 20px,
      rgba(58, 74, 90, 0.1) 21px
    ),
    /* Base metal surface */
    radial-gradient(circle at 50% 50%, 
      rgba(40, 50, 60, 0.95) 0%, 
      rgba(20, 25, 30, 0.95) 100%
    ) !important;
  
  backdrop-filter: blur(10px);
  border: 3px solid #3a4a5a;
  border-radius: 50% !important;
  max-width: 600px;
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 
    inset 0 0 100px rgba(0, 0, 0, 0.8),
    inset -20px -20px 60px rgba(58, 74, 90, 0.3),
    inset 20px 20px 60px rgba(0, 0, 0, 0.5),
    0 0 100px rgba(255, 0, 0, 0.3),
    0 30px 100px rgba(0, 0, 0, 0.9) !important;
  position: relative;
  overflow: hidden;
  
  /* Rotating detail ring */
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: conic-gradient(
      from 0deg,
      #FF0000,
      #1a1a1a,
      #3a4a5a,
      #8B0000,
      #2a3a4a,
      #FF0000
    );
    border-radius: 50%;
    z-index: -1;
    animation: rotate 20s linear infinite;
  }
  
  /* Surface details */
  &::after {
    content: '';
    position: absolute;
    top: 10%;
    right: 15%;
    width: 30px;
    height: 30px;
    background: radial-gradient(circle, rgba(255, 0, 0, 0.4) 0%, transparent 70%);
    border-radius: 50%;
    box-shadow: 
      50px 20px 0 10px rgba(58, 74, 90, 0.2),
      -80px 50px 0 5px rgba(58, 74, 90, 0.3),
      30px 80px 0 8px rgba(58, 74, 90, 0.2),
      -60px -40px 0 6px rgba(58, 74, 90, 0.25);
  }
  
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  @media (max-width: 768px) {
    width: 90vw;
    height: 90vw;
    max-width: 500px;
    max-height: 500px;
  }
`;

export const StyledButton = styled('a')`
  background: linear-gradient(45deg, #8B0000, #2a3a4a, #8B0000);
  background-size: 200% 200%;
  color: #FFFFFF;
  padding: 1.5rem 4rem;
  font-size: 1.3rem;
  font-weight: 900;
  text-decoration: none;
  border: 2px solid #FF0000;
  display: inline-flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s ease;
  box-shadow: 
    inset 0 0 20px rgba(0, 0, 0, 0.5),
    0 0 40px rgba(255, 0, 0, 0.5),
    0 10px 30px rgba(0, 0, 0, 0.8);
  position: relative;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-top: 2rem;
  clip-path: polygon(20px 0, 100% 0, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0 100%, 0 20px);
  animation: backgroundShift 3s ease-in-out infinite;
  z-index: 1;
  
  @keyframes backgroundShift {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 
      inset 0 0 30px rgba(0, 0, 0, 0.8),
      0 0 60px rgba(255, 0, 0, 0.8),
      0 15px 40px rgba(0, 0, 0, 0.9);
    border-color: #FFFFFF;
  }
`;