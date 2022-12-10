import React from 'react'
import { toast } from 'react-toastify';
import { Card } from 'primereact/card';

import { StockContext } from '../../StockContext';
import useForm from '../../hooks/useForm';
import { getComparation } from '../../Api';

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

	const handleSubmit = async (event) => {
    event.preventDefault();
    let params = ''
    stocksToCompare.value.forEach(param => params += `stocksToCompare[]=${param}&`)
    params = params.slice(0, -1)

    const response = await getComparation(currentStock, params)
		if(response.status === 200) {
			const comparation = response.data.lastPrices

			const names = comparation.map(price => price.name).reverse()
			const lastPrices = comparation.map(price => price.lastPrice).reverse()
      const lastDate = comparation[0].pricedAt

			setComparation({names, lastPrices, lastDate})
		} else {
		  toast.error('Não foi possível realizar a comparação. Cheque as informações e tente novamente!');
		}
  }

  return (
		<Card title="Comparação">
      <p>Para selecionar as ações que deseja comparar digite o nome da ação e clique "Enter"</p>
      <form onSubmit={handleSubmit}>
        <Input
          type={'chips'}
          {...stocksToCompare}
        />
        <ButtonApp 
          label={'Comparar'}
          canDisable={true}
          disabled={buttonDisabled}
        />
      </form>
      {
        Object.keys(comparation).length > 0 && <ComparationGraph comparation={comparation}/>
      }
	</Card>
  )
}
