import React from 'react';
import { Box, Container, Typography, Button, Paper } from '@mui/material';
import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
              url('https://images.unsplash.com/photo-1533619043865-1f0c0b7b0b9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
`;

const Logo = styled(Typography)`
  font-size: 4rem;
  font-weight: bold;
  color: #FFE81F;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 2rem;
  text-align: center;
`;

const StyledPaper = styled(Paper)`
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.8) !important;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 232, 31, 0.3);
  max-width: 600px;
  width: 100%;
`;

const StyledButton = styled('a')`
  margin-top: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  background-color: #FFE81F;
  color: #000000;
  text-decoration: none;
  border-radius: 4px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  &:hover {
    background-color: #FFD700;
  }
`;

const LandingPage: React.FC = () => {
  return (
    <StyledContainer maxWidth={false}>
      <Logo variant="h1">VADER FLIX</Logo>
      <StyledPaper elevation={3}>
        <Typography variant="h4" gutterBottom color="primary">
          Welcome to the Dark Side
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Your ultimate destination for Star Wars entertainment. Stream your favorite movies,
          TV shows, and exclusive content from the galaxy far, far away.
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          Join the Empire today and experience entertainment like never before.
        </Typography>
        <Box display="flex" justifyContent="center">
          <StyledButton href="http://192.168.50.92:5055">
            <PlayArrowIcon /> Enter the Portal
          </StyledButton>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default LandingPage; 