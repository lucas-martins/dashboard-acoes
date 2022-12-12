import React from 'react'
import moment from 'moment';
import { Card } from 'primereact/card';
import { Tag } from 'primereact/tag';
import { ProgressSpinner } from 'primereact/progressspinner';

import { StockContext } from '../../StockContext';
import useForm from '../../hooks/useForm';
import { handleSubmit } from '../../helpers/HandleSubmit';

import { Input } from '../Input/Input';
import { ButtonApp } from '../ButtonApp/ButtonApp';

import styles from './ProjectionCard.module.css'

export const ProjectionCard = () => {

	const date = useForm()
	const amount = useForm()
	const {currentStock, currentPrice, projection, setProjection} = React.useContext(StockContext)
	const [buttonDisabled, setButtonDisabled] = React.useState(true)
	const [transformedData, setTransformedDate] = React.useState('')
  const [loading, setLoading] = React.useState(false)

	React.useEffect(() => {
		if(!date.value || !amount.value || currentStock.length === 0) setButtonDisabled(true)
		else setButtonDisabled(false)
	}, [date.value, amount.value, currentStock])

	React.useEffect(() => {
		if(projection?.purchasedAt) 
			setTransformedDate(moment(projection.purchasedAt).format('DD/MM/YYYY'))
	}, [projection])

	const onSubmit = async (e) => {
    setLoading(true)
		const response = await handleSubmit(e, 
			{currentStock, date: date.value, amount: amount.value}, 'projection')
		if(response && Object?.keys(response)?.length > 0) setProjection(response)
    setLoading(false)
	}

  return (
    <Card data-testid="projection" title="Projeção">
      <form className="grid_form" onSubmit={(e) => onSubmit(e)}>
        <div>
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
        </div>

        <div className="button_align">
          <ButtonApp
            label={'Projetar'}
            canDisable={true}
            disabled={buttonDisabled}
            tooltip={'Projetar'}
          />
        </div>
      </form>
      {
        loading && 
        <div className={`flex justify-content-center align-items-center mt-3 ${styles.spinner}`}>
          <ProgressSpinner />
        </div>
      }
      {
        !loading && Object.keys(projection).length === 0 &&
        <p 
          className={Object.keys(currentPrice).length === 0 ? 
          styles.projection_hint : styles.projection_hint_price_generated}
        >
          Informe o nome da ação, data de compra e quantidade para realizar a projeção
        </p>
      }
      {
        !loading && Object.keys(projection).length > 0 && (
          <div className={styles.projection_container}>
            <div className={styles.info_projection}>
              <p>
                <small>Nome</small>
                <Tag>{projection.name}</Tag>{' '}
              </p>
              <p>
                <small> Último Preço</small>
                <Tag> R${projection.lastPrice}</Tag>
              </p>
              <p>
                <small>Preço Atual</small>
                <Tag>R${projection.priceAtDate}</Tag>{' '}
              </p>
            </div>

            <div className={styles.info_projection}>
              <p>
                <small>Quantidade </small>
                <Tag>{projection.purchasedAmount}</Tag>{' '}
              </p>
              <p>
                <small>Data da compra</small>
                <Tag>{transformedData}</Tag>{' '}
              </p>
              <p>
                <small> Projeção de ganhos</small>
                <Tag>{projection.capitalGains}</Tag>{' '}
              </p>
            </div>
          </div>
        )
      }
    </Card>
  )
}
