import { render, screen } from '@testing-library/react';
import App from './index';

test('renders App with NavBar, Stories and Footer', () => {
  render(<App />);

  // Check that the NavBar, Stories, and Footer components are rendered
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
  expect(screen.getByRole('footer')).toBeInTheDocument();
});