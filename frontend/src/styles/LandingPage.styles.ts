import styled from 'styled-components';

const background = '#0D0D0D';
const foreground = '#1C1C1E';
const accent = '#E50914';
const textColor = '#FFFFFF';
const mutedText = '#A0A0A0';

export const StyledContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background: #000 url('/src/assets/ds_bg.png') no-repeat center center;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('/src/assets/ds_bg.png') no-repeat center/cover;
  opacity: 0.08;
  pointer-events: none;
  z-index: 0;
`;

export const Logo = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${accent};
  word-break: break-word;
  z-index: 1;

  @media (max-width: 600px) {
    font-size: 2rem;
    padding: 0 1rem;
  }
`;

export const StyledPaper = styled.div`
  background-color: ${foreground};
  padding: 2rem;
  border-radius: 8px;
  z-index: 1;
  max-width: 600px;
  width: 100%;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export const StyledButton = styled.button`
  padding: 1.2rem 2.8rem;
  font-size: 1.35rem;
  font-weight: bold;
  color: #fff;
  background: #222;
  border: none;
  border-radius: 28px;
  cursor: pointer;
  letter-spacing: 0.13em;
  transition: background 0.2s, transform 0.2s;
  box-shadow: 0 4px 20px #0007;

  &:hover {
    background: #444;
    transform: scale(1.07);
  }
`;
