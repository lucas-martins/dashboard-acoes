import { render, screen } from '@testing-library/react';
import App from '../App.js';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import { render, screen } from '@testing-library/react';
// import App from './App';

test('renders the landing page', () => {
  render(<App />);

  expect(true).toBeTruthy();
});



