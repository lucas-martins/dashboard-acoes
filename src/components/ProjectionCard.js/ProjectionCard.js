import React from 'react'
import moment from 'moment';
import { toast } from 'react-toastify';
import { Card } from 'primereact/card';

import { StockContext } from '../../StockContext';
import useForm from '../../hooks/useForm';
import { getProjection } from '../../Api';
import { transformDate } from '../../helpers/TransformDate';

import { Input } from '../Input/Input';
import { ButtonApp } from '../ButtonApp/ButtonApp';

export const ProjectionCard = () => {

	const date = useForm()
	const amount = useForm()
	const {currentStock, projection, setProjection} = React.useContext(StockContext)
	const [buttonDisabled, setButtonDisabled] = React.useState(true)
	const [transformedData, setTransformedDate] = React.useState('')

	React.useEffect(() => {
		if(!date.value || !amount.value || currentStock.length === 0) setButtonDisabled(true)
		else setButtonDisabled(false)
	}, [date.value, amount.value, currentStock])

	React.useEffect(() => {
		if(projection?.purchasedAt) 
			setTransformedDate(moment(projection.purchasedAt).format('DD/MM/YYYY'))
	}, [projection])

	const handleSubmit = async (event) => {
    event.preventDefault();
		const apiDate = transformDate(date.value)
		const response = await getProjection(currentStock, apiDate, amount.value)
		if(response.status === 200) {
			setProjection(response.data)
		} else {
		  toast.error('Valor de tempo inválido!');
		}
  }

  return (
    <Card title="Projeção">
			<form onSubmit={handleSubmit}>
				<Input
          label={'Data da compra'}
          type={'date'}
          name={'purchasedDate'}
          {...date}
        />
				<Input
          label={'Quantidade'}
          type={'number'}
          name={'purchasedAmount'}
          {...amount}
        />
				<ButtonApp 
					label={'Projetar'}
					canDisable={true}
					disabled={buttonDisabled}
				/>
			</form>
			{
				Object.keys(projection).length > 0 && 
				<div>
					<p>Nome: {projection.name}</p>
					<p>Último Preço: R${projection.lastPrice}</p>
					<p>Preço Atual: R${projection.priceAtDate}</p>
					<p>Quantidade: {projection.purchasedAmount}</p>
					<p>Data da compra: {transformedData}</p>
					<p>Projeção de ganhos: {projection.capitalGains}</p>
				</div>
			}
    </Card>
  )
}
