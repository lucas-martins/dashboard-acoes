import React from 'react'

import { StockContext } from '../../StockContext'

import { AppPresentation } from '../AppPresentation/AppPresentation'
import { ComparationCard } from '../ComparationCard/ComparationCard'
import { CurrentPriceCard } from '../CurrentPriceCard.js/CurrentPriceCard'
import { HistoricCard } from '../HistoricCard/HistoricCard'
import { MainStock } from '../MainStock/MainStock'
import { ProjectionCard } from '../ProjectionCard.js/ProjectionCard'

export const Container = () => {

  const {theme} = React.useContext(StockContext)
  
  return (
    <div className={`App ${theme}`}>
        <AppPresentation />
        <div>
        <div className="max_width_container">
            <div className="dashboard_container">
            <div className="dashboard_col">
                <MainStock />
                <CurrentPriceCard />
            </div>
            <ProjectionCard />
            </div>
            <div className="dashboard_container">
            <HistoricCard />
            <ComparationCard />
            </div>
        </div>
        </div>
    </div>
  )
}
