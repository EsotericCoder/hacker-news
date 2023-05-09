import React from 'react';
import { render, screen } from '@testing-library/react';
import StoryCard from './index';

describe('StoryCard', () => {
  const mockStory = {
    title: 'Test Title',
    url: 'https://example.com',
    by: 'Test Author',
    author: { karma: 123 },
    score: 456,
    time: 1616161616,
  };

  it('renders the story card correctly', () => {
    render(<StoryCard {...mockStory} />);

    // Check that the title, author, karma, score, and time are displayed correctly
    expect(screen.getByText(mockStory.title)).toBeInTheDocument();
    expect(screen.getByText(`Author: ${mockStory.by}`)).toBeInTheDocument();
    expect(screen.getByText(`Karma: ${mockStory.author.karma}`)).toBeInTheDocument();
    expect(screen.getByText(`Score: ${mockStory.score}`)).toBeInTheDocument();
    expect(screen.getByText(new Date(mockStory.time * 1000).toLocaleString())).toBeInTheDocument();
    
    // Check that the link is correct
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveAttribute('href', mockStory.url);
  });
});
