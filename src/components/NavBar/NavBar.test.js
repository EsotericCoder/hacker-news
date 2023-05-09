import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from './index';

describe('NavBar', () => {
  it('renders the navbar correctly', () => {
    render(<NavBar />);
    
    // Check that the "Hacker News" text is present
    expect(screen.getByText('Hacker News')).toBeInTheDocument();
    
    // Check that the logo is displayed
    const logo = screen.getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'logo.png');
  });
});
