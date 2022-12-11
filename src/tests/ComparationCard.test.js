import { render, screen, fireEvent } from '@testing-library/react';
import { StockStorage } from '../StockContext';
import { ComparationCard } from '../components/ComparationCard/ComparationCard';
import * as SubmitModule from '../helpers/HandleSubmit';

jest.mock('../helpers/HandleSubmit');

test('checar se o submit do formulário (comparação) foi chamado ao clicarmos no botão de envio do mesmo', async () => {
    const mockLogin = jest.spyOn(SubmitModule,'handleSubmit').mockImplementation()
    const onSubmit = jest.fn((e) => e.preventDefault())

    render(<StockStorage><ComparationCard onSubmit={onSubmit} /></StockStorage>);

    fireEvent.submit(screen.getByText("Comparar"))

    expect(mockLogin).toHaveBeenCalled();
});