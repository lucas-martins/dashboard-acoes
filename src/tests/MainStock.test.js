import { render, screen, fireEvent, waitFor} from '@testing-library/react';
import { StockStorage } from '../StockContext';
import { MainStock } from '../components/MainStock/MainStock';
import * as SubmitModule from '../helpers/HandleSubmit';

jest.mock('../helpers/HandleSubmit');

test('checar se o formulário está presente', () => {
    render(<StockStorage><MainStock /></StockStorage>);
    const mainStock = screen.getByTestId('mainStock');
    const form = screen.getByTestId('form');
  
    expect(mainStock).toContainElement(form);
});

test('checar se o submit do formulário (último preço) foi chamado ao clicarmos no botão de envio do mesmo', async () => {
    const mockSubmit = jest.spyOn(SubmitModule,'handleSubmit').mockImplementation()
    const onSubmit = jest.fn((e) => e.preventDefault())

    render(<StockStorage><MainStock onSubmit={onSubmit} /></StockStorage>);

    fireEvent.submit(screen.getByText("Pesquisar"))

    await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalled();
    })
});