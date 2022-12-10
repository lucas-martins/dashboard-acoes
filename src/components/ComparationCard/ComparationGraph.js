import React from 'react'
import { Chart } from 'primereact/chart';

import { options } from '../../helpers/GraphOptions';

export const ComparationGraph = ({comparation}) => {

    const [chartData, setChartData] = React.useState({})

    React.useEffect(() => {
		setChartData({
			labels: comparation.names,
			datasets: [
				{
					label: 'Last Prices',
					data: comparation.lastPrices,
					fill: false,
					backgroundColor: '#42A5F5',
					tension: .4
				}
			]
		})
	}, [comparation])

    return (
		<>
			{
				Object.keys(chartData).length > 0 &&
				// <Chart type="line" data={chartData} options={options} />
        <Chart type="bar" data={chartData} options={options} />
			}
		</>
  )

}