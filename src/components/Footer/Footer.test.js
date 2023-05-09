import { render, screen } from '@testing-library/react';
import Footer from './index';

describe('Footer component', () => {
  test('renders copyright text correctly', () => {
    render(<Footer />);

    // Check text to be in the format © YYYY Hacker News
    const currentYear = new Date().getFullYear();
    const expectedText = `© ${currentYear} Hacker News`;
    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
