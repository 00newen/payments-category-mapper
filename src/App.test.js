import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Payments Category Mapper link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Payments Category Mapper/i);
  expect(linkElement).toBeInTheDocument();
});
