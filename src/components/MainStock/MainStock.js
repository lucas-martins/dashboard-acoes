import React from 'react'
import { toast } from 'react-toastify';

import { Input } from '../Input/Input'
import { ButtonApp } from '../ButtonApp/ButtonApp'

import useForm from '../../hooks/useForm'
import { StockContext } from '../../StockContext'
import { getCurrentPrice } from '../../Api'

import styles from './MainStock.module.css'

export const MainStock = () => {

  const stock = useForm()
  const {setCurrentPrice, setCurrentStock} = React.useContext(StockContext)

  React.useEffect(() => setCurrentStock(stock.value), [stock.value, setCurrentStock])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await getCurrentPrice(stock.value)
    if(response.status === 200) {
      setCurrentPrice(response.data)
    } else {
      toast.error('Ação não encontrada!');
    }
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
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
