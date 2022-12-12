import { render, screen, fireEvent } from '@testing-library/react';
import { StockStorage } from '../StockContext';
import { HistoricCard } from '../components/HistoricCard/HistoricCard';
import * as SubmitModule from '../helpers/HandleSubmit';

jest.mock('../helpers/HandleSubmit');

test('checar se o submit do formulário (histórico) foi chamado ao clicarmos no botão de envio do mesmo', async () => {
    const mockSubmit = jest.spyOn(SubmitModule,'handleSubmit').mockImplementation()
    const onSubmit = jest.fn((e) => e.preventDefault())

    render(<StockStorage><HistoricCard onSubmit={onSubmit} /></StockStorage>);

    fireEvent.submit(screen.getByText("Consultar"))

    expect(mockSubmit).toHaveBeenCalled();
});