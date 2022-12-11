import { render, screen } from '@testing-library/react';
import { StockStorage } from '../StockContext';
import { CurrentPriceCard } from '../components/CurrentPriceCard.js/CurrentPriceCard';

test('checar se a descrição de que não há dados está sendo exibida', () => {
    render(<StockStorage><CurrentPriceCard /></StockStorage>);
  
    const currentPriceNotSetted = screen.getByTestId('currentPriceNotSetted');

    expect(currentPriceNotSetted).toBeInTheDocument()
});