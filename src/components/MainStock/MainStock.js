import React from 'react'
import { Input } from '../Input/Input'
import useForm from '../../hooks/useForm'
import { ButtonApp } from '../ButtonApp/ButtonApp'
import styles from './MainStock.module.css'

export const MainStock = () => {

  const stock = useForm()

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(stock.value)
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
        <ButtonApp label={'Pesquisar'} />
      </form>
    </div>
  )
}
