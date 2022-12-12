import React from 'react';

import { ToastContainer } from 'react-toastify';
import moment from 'moment';
import 'moment/locale/pt-br';

import { StockStorage } from './StockContext';

import { Container } from './components/Container/Container';

import './App.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  moment.locale('pt-br');

  return (
    <div data-testid='mainComponent'>
      <StockStorage>
        <Container />
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
