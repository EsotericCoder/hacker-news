import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoadMoreButton from './index';

describe('LoadMoreButton', () => {
  it('calls onLoadMoreClick when button is clicked', () => {
    const mockOnLoadMoreClick = jest.fn();
    const { getByText } = render(<LoadMoreButton onLoadMoreClick={mockOnLoadMoreClick} />);

    fireEvent.click(getByText('Load more articles'));

    expect(mockOnLoadMoreClick).toHaveBeenCalledTimes(1);
  });
});
