import React from 'react'

import { Input } from '../Input/Input'
import { ButtonApp } from '../ButtonApp/ButtonApp'

import useForm from '../../hooks/useForm'
import { StockContext } from '../../StockContext'
import { handleSubmit } from '../../helpers/HandleSubmit';

import styles from './MainStock.module.css'

export const MainStock = () => {
  const stock = useForm()
  const {setCurrentPrice, setCurrentStock} = React.useContext(StockContext)

  React.useEffect(() => setCurrentStock(stock.value), [stock.value, setCurrentStock])

	const onSubmit = async (e) => {
		const response = await handleSubmit(e, 
			{stock: stock.value}, 'lastPrice')
		if(response && Object?.keys(response)?.length > 0) setCurrentPrice(response)
	}

  return (
    <div data-testid="mainStock" className={styles.container}>
      <form data-testid="form" onSubmit={(e) => onSubmit(e)}>
        <Input
          label={'Nome da ação'}
          type={'text'}
          name={'stock'}
          errorMessage={'Esta ação não foi encontrada.'}
          {...stock}
        />
        <ButtonApp label={'Pesquisar'} tooltip={'Informe uma ação para pesquisar'} />
      </form>
    </div>
  )
}
