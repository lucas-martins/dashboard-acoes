import { render, screen } from '@testing-library/react';
import { AppPresentation } from '../components/AppPresentation/AppPresentation.js';

test('checar se o título da aplicação foi renderizado corretamente', () => {
  render(<AppPresentation />);
  const title = screen.getByText(/Bem-vindo ao Dashboard de Ações!/i)

  expect(title).toBeInTheDocument()
});

test('checar se a descrição da aplicação foi renderizada corretamente', () => {
  render(<AppPresentation />);

  const presentation = screen.getByTestId('presentation');
  const description = screen.getByTestId('description');

  expect(presentation).toContainElement(description);
})



