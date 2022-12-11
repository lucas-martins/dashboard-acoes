import React from 'react'
import moment from 'moment'
import { Card } from 'primereact/card';

import { StockContext } from '../../StockContext';

import styles from './CurrentPriceCard.module.css'

export const CurrentPriceCard = () => {
	const {currentPrice} = React.useContext(StockContext)
	const [transformedData, setTransformedDate] = React.useState('')

	React.useEffect(() => {
		if(currentPrice?.pricedAt) 
			setTransformedDate(moment(currentPrice.pricedAt).format('DD/MM/YYYY'))
	}, [currentPrice])

  return (
    <Card data-testid="currentPrice" title="Último Preço" className={styles.card}>
			{
				!Object.keys(currentPrice).length ? 
					<p data-testid="currentPriceNotSetted" className="m-0">
						Informe o nome da ação que deseja verificar o último preço
					</p>
				:
				<div data-testid="currentPriceSetted">
					<p>Nome: {currentPrice.name}</p>
					<p>Último Preço: R${currentPrice.lastPrice}</p>
					<p>Data: {transformedData}</p>
				</div>
			}

    </Card>
  )
}
