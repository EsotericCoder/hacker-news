import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Stories from './index';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders Stories component', () => {
  render(<Stories />);
  const linkElement = screen.getByText(/Top Hacker News Stories/i);
  expect(linkElement).toBeInTheDocument();
});

test('fetches stories on mount', async () => {
  fetchMock.mockResponseOnce(JSON.stringify([]));
  render(<Stories />);
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(1));
});

test('fetches more stories when Load More button is clicked', async () => {
  fetchMock.mockResponses(
    [JSON.stringify([])], // Mock the response for initial fetch
    [JSON.stringify([])]  // Mock the response for the second fetch
  );
  render(<Stories />);
  fireEvent.click(screen.getByText(/Load more articles/i));
  await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2));  // one for initial load, one for button click
});
