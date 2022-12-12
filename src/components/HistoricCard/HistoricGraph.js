import React from 'react'
import { Chart } from 'primereact/chart';

import { options } from '../../helpers/GraphOptions';
import { StockContext } from '../../StockContext';
import { colorsChart } from '../../helpers/ColorsChart';

export const HistoricGraph = ({historic}) => {

	const [chartData, setChartData] = React.useState({})
	const {theme} = React.useContext(StockContext)
	const localTheme = localStorage.getItem("theme")

	React.useEffect(() => {
		setChartData({
			labels: historic.dates,
			datasets: [
				{
					label: 'Opening',
					data: historic.opening,
					fill: false,
					borderColor: '#42A5F5',
					tension: .4
				},
				{
					label: 'Low',
					data: historic.low,
					fill: false,
					borderColor: '#FFA726',
					tension: .4
				},
				{
					label: 'High',
					data: historic.high,
					fill: false,
					borderColor: '#00bb7e',
					tension: .4
				},
				{
					label: 'Closing',
					data: historic.closing,
					fill: false,
					borderColor: '#cc65fe',
					tension: .4
				},
			]
		})
		const currentTheme = localTheme ? localTheme : theme
		colorsChart(currentTheme)
	}, [historic, localTheme ,theme])

  return (
		<>
			{
				Object.keys(chartData).length > 0 &&
				<Chart type="line" data={chartData} options={options} />
			}
		</>
  )
}
