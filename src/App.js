import React from 'react'
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css"; 

import { AppPresentation } from './components/AppPresentation/AppPresentation';
import { MainStock } from './components/MainStock/MainStock';
import { CurrentPriceCard } from './components/CurrentPriceCard.js/CurrentPriceCard';

function App() {
  return (
    <div className="App">
      <AppPresentation />
      <MainStock />
      <div className="grid">
        <div className='col-6'>
          <CurrentPriceCard />
        </div>
      </div>
    </div>
  );
}

export default App;
