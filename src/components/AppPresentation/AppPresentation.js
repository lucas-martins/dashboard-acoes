import React from 'react'

import { StockContext } from '../../StockContext'
import { handleSubmit } from '../../helpers/HandleSubmit'

import { ButtonApp } from '../ButtonApp/ButtonApp'

import styles from './AppPresentation.module.css'

export const AppPresentation = () => {

  const {theme, setTheme} = React.useContext(StockContext)

  const onSubmit = async (e) => {
    const response = await handleSubmit(e, {theme}, 'theme')
    if(response) setTheme(response)
  }

  return (
    <div data-testid="presentation" className='text-center max_width_container'>
      <form className={styles.choose_theme} onSubmit={(e) => onSubmit(e)}>
        <ButtonApp hasIcon="true" icon={theme === 'theme_light' ? 'MOON' : 'SUN'} />
      </form>
      <h1 className={styles.title_app}>Bem-vindo ao Dashboard de Ações!</h1>
      <div data-testid="description">
        <p>
            Com esta aplicação você irá conseguir tomar melhores decisões sobre suas ações.
        </p>
        <p>
            Consulte o seu preço atual, preço histórico, compare seu preço atual
            com outras ações e projete seus ganhos em uma data específica!
        </p>
      </div>
    </div>
  )
}
