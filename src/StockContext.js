import React from "react";

export const StockContext = React.createContext();

export const StockStorage = ({children}) => {
    const [currentStock, setCurrentStock] = React.useState('')

    const [currentPrice, setCurrentPrice] = React.useState({})
    const [projection, setProjection] = React.useState({})
    const [historic, setHistoric] = React.useState({})
    const [comparation, setComparation] = React.useState({})

    return (
        <StockContext.Provider value={{
            currentStock,
            setCurrentStock,
            currentPrice,
            setCurrentPrice,
            projection,
            setProjection,
            historic,
            setHistoric,
            comparation,
            setComparation
        }}> 
            {children} 
        </StockContext.Provider>
    )
}