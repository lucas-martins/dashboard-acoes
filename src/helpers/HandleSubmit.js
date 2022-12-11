import moment from 'moment';
import { toast } from 'react-toastify';

import { getCurrentPrice, getProjection, getHistoric, getComparation } from '../Api';
import { transformDate } from './TransformDate';

export const handleSubmit = async (e, values, endpoint) => {
    e.preventDefault();
    let response;

    if(endpoint === 'lastPrice') response = await lastPrice(values)
    if(endpoint === 'projection') response = await projection(values)
    if(endpoint === 'historic') response = await historic(values)
    if(endpoint === 'comparation') response = await comparation(values)

    return response
};

const lastPrice = async (values) => {
    const {stock} = values
    const response = await getCurrentPrice(stock)
    if(response.status === 200) {
      return response.data
    } else {
      toast.error('Ação não encontrada!');
    }
}

const projection = async (values) => {
    const {currentStock, date, amount} = values

    const apiDate = transformDate(date)
    const response = await getProjection(currentStock, apiDate, amount)

    if(response.status === 200) {
        return response.data
    } else {
      toast.error('Valor de tempo inválido!');
    }
}

const historic = async (values) => {
    const {currentStock, initialDate, finalDate} = values
    const apiInitialDate = transformDate(initialDate)
    const apiFinalDate = transformDate(finalDate)

    const response = await getHistoric(currentStock, apiInitialDate, apiFinalDate)
    if(response.status === 200) {
        const historic = response.data.prices

        const opening = historic.map(price => price.opening).reverse()
        const low = historic.map(price => price.low).reverse()
        const high = historic.map(price => price.high).reverse()
        const closing = historic.map(price => price.closing).reverse()
        const dates = historic.map(price => moment(price.pricedAt).format('DD/MM/YYYY')).reverse()

        return {dates, opening, low, high, closing}
    } else {
      toast.error('Valor de tempo inválido!');
    }
}

const comparation = async (values) => {
    const {stocksToCompare, currentStock} = values
    let params = ''
    stocksToCompare.value.forEach(param => params += `stocksToCompare[]=${param}&`)
    params = params.slice(0, -1)

    const response = await getComparation(currentStock, params)
    if(response.status === 200) {
        const comparation = response.data.lastPrices

        const names = comparation.map(price => price.name).reverse()
        const lastPrices = comparation.map(price => price.lastPrice).reverse()
        const lastDate = comparation[0].pricedAt

        return {names, lastPrices, lastDate}
    } else {
        toast.error('Não foi possível realizar a comparação. Cheque as informações e tente novamente!');
    }
}
