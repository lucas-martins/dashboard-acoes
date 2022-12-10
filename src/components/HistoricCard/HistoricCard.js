import React from 'react'
import moment from 'moment';
import { toast } from 'react-toastify';
import { Card } from 'primereact/card';

import { StockContext } from '../../StockContext';
import useForm from '../../hooks/useForm';
import { transformDate } from '../../helpers/TransformDate';
import { getHistoric } from '../../Api';

import { Input } from '../Input/Input';
import { ButtonApp } from '../ButtonApp/ButtonApp';
import { HistoricGraph } from './HistoricGraph';

export const HistoricCard = () => {
	const initialDate = useForm()
	const finalDate = useForm()

	const {currentStock, historic, setHistoric} = React.useContext(StockContext)
	const [buttonDisabled, setButtonDisabled] = React.useState(true)

	React.useEffect(() => {
		if(!initialDate.value || !finalDate.value || currentStock.length === 0) setButtonDisabled(true)
		else setButtonDisabled(false)
	}, [initialDate.value, finalDate.value, currentStock])

	const handleSubmit = async (event) => {
    event.preventDefault();
		const apiInitialDate = transformDate(initialDate.value)
		const apiFinalDate = transformDate(finalDate.value)

		const response = await getHistoric(currentStock, apiInitialDate, apiFinalDate)
		if(response.status === 200) {
			const historic = response.data.prices

			const opening = historic.map(price => price.opening).reverse()
			const low = historic.map(price => price.low).reverse()
			const high = historic.map(price => price.high).reverse()
			const closing = historic.map(price => price.closing).reverse()
			const dates = historic.map(price => moment(price.pricedAt).format('DD/MM/YYYY')).reverse()

			setHistoric({dates, opening, low, high, closing})
		} else {
		  toast.error('Valor de tempo inválido!');
		}
  }

  return (
		<Card title="Projeção">
		<form onSubmit={handleSubmit}>
			<Input
				label={'Data da inicial'}
				type={'date'}
				name={'initialDate'}
				{...initialDate}
			/>
			<Input
				label={'Data Final'}
				type={'date'}
				name={'finalDate'}
				{...finalDate}
			/>
			<ButtonApp 
				label={'Comparar'}
				canDisable={true}
				disabled={buttonDisabled}
			/>
		</form>
		{
			Object.keys(historic).length > 0 && <HistoricGraph historic={historic}/>
		}
	</Card>
  )
}
