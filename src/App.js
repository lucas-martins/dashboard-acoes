import React from 'react'

import {ToastContainer} from 'react-toastify'
import moment from 'moment'
import 'moment/locale/pt-br'

import { StockStorage } from './StockContext';

import { AppPresentation } from './components/AppPresentation/AppPresentation';
import { MainStock } from './components/MainStock/MainStock';
import { CurrentPriceCard } from './components/CurrentPriceCard.js/CurrentPriceCard';
import { ProjectionCard } from './components/ProjectionCard.js/ProjectionCard';

import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import 'react-toastify/dist/ReactToastify.css';
import { HistoricCard } from './components/HistoricCard/HistoricCard';
import { ComparationCard } from './components/ComparationCard/ComparationCard';

function App() {
  moment.locale('pt-br')

  return (
    <div data-testid='mainComponent' className="App">
      <StockStorage>
        <AppPresentation />
        <MainStock />
        <div className="grid">
          <div className='col-6'>
            <CurrentPriceCard />
          </div>
          <div className='col-6'>
            <ProjectionCard />
          </div>
          <div className='col-12'>
            <HistoricCard />
          </div>
          <div className='col-12'>
            <ComparationCard />
          </div>
        </div>
      </StockStorage>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
