import { render, screen, fireEvent } from '@testing-library/react';
import { StockStorage } from '../StockContext';
import { AppPresentation } from '../components/AppPresentation/AppPresentation.js';
import * as SubmitModule from '../helpers/HandleSubmit';

jest.mock('../helpers/HandleSubmit');

test('checar se o título da aplicação foi renderizado corretamente', () => {
  render(<StockStorage><AppPresentation /></StockStorage>);
  const title = screen.getByText(/Bem-vindo ao Dashboard de Ações!/i)

  expect(title).toBeInTheDocument()
});

test('checar se a descrição da aplicação foi renderizada corretamente', () => {
  render(<StockStorage><AppPresentation /></StockStorage>);

  const presentation = screen.getByTestId('presentation');
  const description = screen.getByTestId('description');

  expect(presentation).toContainElement(description);
})

test('checar se o submit do formulário (setar tema) foi chamado ao clicarmos no botão de envio do mesmo', async () => {
  const mockSubmit = jest.spyOn(SubmitModule,'handleSubmit').mockImplementation()
  const onSubmit = jest.fn((e) => e.preventDefault())

  render(<StockStorage><AppPresentation onSubmit={onSubmit} /></StockStorage>);

  fireEvent.submit(screen.getByTestId('icon'))

  expect(mockSubmit).toHaveBeenCalled();
});



