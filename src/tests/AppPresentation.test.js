import { render, screen } from '@testing-library/react';
import { AppPresentation } from '../components/AppPresentation/AppPresentation.js';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// import { render, screen } from '@testing-library/react';
// import App from './App';

test('AppPresentation', () => {
  render(<AppPresentation />);

  expect(true).toBeTruthy();
});



