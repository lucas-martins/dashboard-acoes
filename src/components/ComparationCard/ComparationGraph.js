import React from 'react'
import { Chart } from 'primereact/chart';

import { options } from '../../helpers/GraphOptions';
import { StockContext } from '../../StockContext';
import { colorsChart } from '../../helpers/ColorsChart';

export const ComparationGraph = ({comparation}) => {

    const [chartData, setChartData] = React.useState({})
	const {theme} = React.useContext(StockContext)
	const localTheme = localStorage.getItem("theme")

    React.useEffect(() => {
		setChartData({
			labels: comparation.names,
			datasets: [
				{
					label: 'Last Prices',
					data: comparation.lastPrices,
					fill: false,
					backgroundColor: '#42A5F5',
					tension: .4,
				}
			]
		})
		const currentTheme = localTheme ? localTheme : theme
		colorsChart(currentTheme)
	}, [comparation, localTheme ,theme])

    return (
		<>
			{
				Object.keys(chartData).length > 0 &&
        		<Chart type="bar" data={chartData} options={options} />
			}
		</>
  )

}