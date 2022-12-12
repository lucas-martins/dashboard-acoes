import React from 'react'
import { Card } from 'primereact/card';

import { StockContext } from '../../StockContext';
import useForm from '../../hooks/useForm';
import { handleSubmit } from '../../helpers/HandleSubmit';

import { Input } from '../Input/Input';
import { ButtonApp } from '../ButtonApp/ButtonApp';
import { ComparationGraph } from './ComparationGraph';

export const ComparationCard = () => {
	const stocksToCompare = useForm()

	const {currentStock, comparation, setComparation} = React.useContext(StockContext)
	const [buttonDisabled, setButtonDisabled] = React.useState(true)

	React.useEffect(() => {
		if(stocksToCompare.value.length === 0 || currentStock.length === 0) setButtonDisabled(true)
		else setButtonDisabled(false)
	}, [stocksToCompare, currentStock])

  const onSubmit = async (e) => {
    const response = await handleSubmit(e, {stocksToCompare, currentStock}, 'comparation')
    if(response && Object?.keys(response)?.length > 0) setComparation(response)
  }

  return (
		<Card data-testid="comparation" title="Comparação">
      <p>
        Para selecionar as ações que deseja comparar digite o nome da ação e
        clique "Enter"
      </p>
      <form className="grid_form" onSubmit={(e) => onSubmit(e)}>
        <div className='input_flex_chips'>
          <Input type={'chips'} {...stocksToCompare} />
        </div>

        <ButtonApp
          label={'Comparar'}
          canDisable={true}
          disabled={buttonDisabled}
        />
      </form>
      {Object.keys(comparation).length > 0 && (
        <ComparationGraph comparation={comparation} />
      )}
    </Card>
  )
}
