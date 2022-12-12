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
      {!Object.keys(currentPrice).length ? (
        <p data-testid="currentPriceNotSetted" className="m-0">
          Informe o nome da ação que deseja verificar o último preço
        </p>
      ) : (
        <div className={styles.info_content}>
          <div className={styles.info}>
            <h1>{currentPrice.name}</h1>
            <span>Ação</span>
          </div>
          <div className={styles.info}>
            <h1>R${currentPrice.lastPrice} </h1>
            <span>Último Preço</span>
          </div>
          <div className={styles.info}>
            <h1>{transformedData}</h1>
            <span>Data</span>
          </div>
        </div>
      )}
    </Card>
  )
}
