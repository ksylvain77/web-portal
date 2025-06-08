import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders VADER FLIX heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/VADER FLIX/i);
  expect(headingElement).toBeInTheDocument();
});
