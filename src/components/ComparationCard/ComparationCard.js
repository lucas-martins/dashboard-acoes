import React from 'react'
import { Card } from 'primereact/card';
import { ProgressSpinner } from 'primereact/progressspinner'

import { StockContext } from '../../StockContext';
import useForm from '../../hooks/useForm';
import { handleSubmit } from '../../helpers/HandleSubmit';
import { emptyDataset } from '../../helpers/EmptyChart';

import { Input } from '../Input/Input';
import { ButtonApp } from '../ButtonApp/ButtonApp';
import { ComparationGraph } from './ComparationGraph';

export const ComparationCard = () => {
	const stocksToCompare = useForm()

	const {currentStock, comparation, setComparation} = React.useContext(StockContext)
	const [buttonDisabled, setButtonDisabled] = React.useState(true)
  const [loading, setLoading] = React.useState(false)

	React.useEffect(() => {
		if(stocksToCompare.value.length === 0 || currentStock.length === 0) setButtonDisabled(true)
		else setButtonDisabled(false)
	}, [stocksToCompare, currentStock])

  const onSubmit = async (e) => {
    setLoading(true)
    const response = await handleSubmit(e, {stocksToCompare, currentStock}, 'comparation')
    if(response && Object?.keys(response)?.length > 0) setComparation(response)
    setLoading(false)
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
          tooltip={'Comparar'}
        />
      </form>
      {
        loading && 
        <div className="flex justify-content-center align-items-center mt-3 spinner_height">
          <ProgressSpinner />
        </div>
      }
      {!loading && Object.keys(comparation).length === 0 && process.env.NODE_ENV !== 'test' &&
        (
          <ComparationGraph comparation={emptyDataset} />
        )
      }
      {!loading && Object.keys(comparation).length > 0 && 
        (
          <ComparationGraph comparation={comparation} />
        )
      }
    </Card>
  )
}
