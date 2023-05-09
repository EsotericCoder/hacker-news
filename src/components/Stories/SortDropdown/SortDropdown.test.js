import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SortDropdown from './index';

describe('SortDropdown', () => {
  it('calls onSortClick with Time', () => {
    // Mock and Render Component
    const mockOnSortClick = jest.fn();
    render(<SortDropdown onSortClick={mockOnSortClick} />);

     // Simulate changing the selection in the dropdown
    fireEvent.mouseDown(screen.getByRole('button', { name: /sort by/i }));
    const timeListItem = screen.getByRole('option', { name: 'Time' });
    fireEvent.click(timeListItem);

    // Check that onSortClick was called with the correct value
    expect(mockOnSortClick).toHaveBeenCalledWith('time');
  });

  it('calls onSortClick with Score', () => {
    const mockOnSortClick = jest.fn();
    render(<SortDropdown onSortClick={mockOnSortClick} />);

    fireEvent.mouseDown(screen.getByRole('button', { name: /sort by/i }));
    const scoreListItem = screen.getByRole('option', { name: 'Score' });
    fireEvent.click(scoreListItem);
    expect(mockOnSortClick).toHaveBeenCalledWith('score');
  });

  it('calls onSortClick with Author', () => {
    const mockOnSortClick = jest.fn();
    render(<SortDropdown onSortClick={mockOnSortClick} />);
  
    fireEvent.mouseDown(screen.getByRole('button', { name: /sort by/i }));
    const authorListItem = screen.getByRole('option', { name: 'Author' });
    fireEvent.click(authorListItem);
    expect(mockOnSortClick).toHaveBeenCalledWith('author');
  });

  it('calls onSortClick with Karma', () => {
    const mockOnSortClick = jest.fn();
    render(<SortDropdown onSortClick={mockOnSortClick} />);

    fireEvent.mouseDown(screen.getByRole('button', { name: /sort by/i }));
    const karmaListItem = screen.getByRole('option', { name: 'Karma' });
    fireEvent.click(karmaListItem);
    expect(mockOnSortClick).toHaveBeenCalledWith('karma');
  });
});
