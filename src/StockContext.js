import React from "react";

export const StockContext = React.createContext();

export const StockStorage = ({children}) => {
    const [currentStock, setCurrentStock] = React.useState('')

    const [currentPrice, setCurrentPrice] = React.useState({})
    const [currentPriceLoading, setCurrentPriceLoading] = React.useState(false)
    const [projection, setProjection] = React.useState({})
    const [historic, setHistoric] = React.useState({})
    const [comparation, setComparation] = React.useState({})

    const [theme, setTheme] = React.useState('theme_light')

    return (
        <StockContext.Provider value={{
            currentStock,
            setCurrentStock,
            currentPrice,
            setCurrentPrice,
            currentPriceLoading,
            setCurrentPriceLoading,
            projection,
            setProjection,
            historic,
            setHistoric,
            comparation,
            setComparation,
            theme,
            setTheme
        }}> 
            {children} 
        </StockContext.Provider>
    )
}