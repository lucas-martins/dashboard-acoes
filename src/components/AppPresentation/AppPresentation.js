import React from 'react'

export const AppPresentation = () => {
  return (
    <div data-testid="presentation">
        <h1>Bem-vindo ao Dashboard de Ações!</h1>
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
