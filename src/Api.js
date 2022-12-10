import axios from "axios";

import { baseUrl } from "./helpers/BaseUrl";

export const getCurrentPrice = async (stockName) => {
    return axios.get(`${baseUrl}/stock/${stockName}/quote`)
    .then((response) => response)
    .catch((error) => error)
}

export const getProjection = async (stockName, date, amount) => {
    return axios.get(`${baseUrl}/stocks/${stockName}/gains?purchasedAt=${date}&purchasedAmount=${amount}`)
    .then((response) => response)
    .catch((error) => error)
}

export const getHistoric = async (stockName, initialDate, finalDate) => {
    return axios.get(`${baseUrl}/stocks/${stockName}/history?from=${initialDate}&to=${finalDate}`)
    .then((response) => response)
    .catch((error) => error)
}

export const getComparation = async (stockName, params) => {
    return axios.get(`${baseUrl}/stocks/${stockName}/compare?${params}`)
    .then((response) => response)
    .catch((error) => error)
}