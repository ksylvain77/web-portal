import React from 'react';
import { Box, Typography } from '@mui/material';
import { StyledContainer, Logo, StyledPaper, StyledButton } from '../styles/LandingPage.styles';

const LandingPage: React.FC = () => {
  return (
    <StyledContainer maxWidth={false}>
      <Logo variant="h1">VADER FLIX</Logo>
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom style={{ 
          color: '#FF0000', 
          textAlign: 'center', 
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: '0.2em'
        }}>
          THE EMPIRE'S ENTERTAINMENT
        </Typography>
        <Typography variant="body1" paragraph style={{ 
          color: '#CCCCCC',
          textAlign: 'center' 
        }}>
          You have failed me for the last time. Your weak streaming services are no match for the power of the Dark Side.
        </Typography>
        <Typography variant="body1" paragraph style={{ 
          color: '#CCCCCC',
          textAlign: 'center' 
        }}>
          Submit to the Empire's superior collection. Resistance is futile.
        </Typography>
        <Box display="flex" justifyContent="center">
        <StyledButton href="https://overseerr.vaderflix.synology.me">
            ⚔ OBEY
          </StyledButton>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default LandingPage;