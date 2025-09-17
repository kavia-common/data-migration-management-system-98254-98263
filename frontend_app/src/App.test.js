import { render, screen } from '@testing-library/react';
import App from './App';

test('renders application title', () => {
  render(<App />);
  const title = screen.getByText(/Data Migration Management System/i);
  expect(title).toBeInTheDocument();
});
