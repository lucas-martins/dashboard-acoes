import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { StockStorage } from '../StockContext';
import { ProjectionCard } from '../components/ProjectionCard.js/ProjectionCard';
import * as SubmitModule from '../helpers/HandleSubmit';

jest.mock('../helpers/HandleSubmit');

test('checar se o submit do formulário (projeção) foi chamado ao clicarmos no botão de envio do mesmo', async () => {
    const mockSubmit = jest.spyOn(SubmitModule,'handleSubmit').mockImplementation()
    const onSubmit = jest.fn((e) => e.preventDefault())

    render(<StockStorage><ProjectionCard onSubmit={onSubmit} /></StockStorage>);

    fireEvent.submit(screen.getByText("Projetar"))

    await waitFor(() => {
        expect(mockSubmit).toHaveBeenCalled();
    })
});