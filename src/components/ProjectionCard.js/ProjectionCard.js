import React from 'react'
import moment from 'moment';
import { Card } from 'primereact/card';

import { StockContext } from '../../StockContext';
import useForm from '../../hooks/useForm';
import { handleSubmit } from '../../helpers/HandleSubmit';

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

	const onSubmit = async (e) => {
		const response = await handleSubmit(e, 
			{currentStock, date: date.value, amount: amount.value}, 'projection')
		if(response && Object?.keys(response)?.length > 0) setProjection(response)
	}

  return (
    <Card data-testid="projection" title="Projeção">
		<form onSubmit={(e) => onSubmit(e)}>
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
