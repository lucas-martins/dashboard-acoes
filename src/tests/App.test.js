import { render, screen } from '@testing-library/react';
import App from '../App.js';

test('checar se todos os componentes foram renderizados corretamente', () => {
  render(<App />);

  const mainComponent = screen.getByTestId('mainComponent');

  const presentation = screen.getByTestId('presentation');
  const currentPrice = screen.getByTestId('currentPrice');
  const projection = screen.getByTestId('projection');
  const historic = screen.getByTestId('historic');
  const comparation = screen.getByTestId('comparation');

  expect(mainComponent).toContainElement(presentation);
  expect(mainComponent).toContainElement(currentPrice);
  expect(mainComponent).toContainElement(projection);
  expect(mainComponent).toContainElement(historic);
  expect(mainComponent).toContainElement(comparation);
});



