import React from 'react'
import { Card } from 'primereact/card';
import { ProgressSpinner } from 'primereact/progressspinner'

import { StockContext } from '../../StockContext';
import useForm from '../../hooks/useForm';
import { handleSubmit } from '../../helpers/HandleSubmit';
import { emptyDataset } from '../../helpers/EmptyChart';

import { Input } from '../Input/Input';
import { ButtonApp } from '../ButtonApp/ButtonApp';
import { HistoricGraph } from './HistoricGraph';

export const HistoricCard = () => {
	const initialDate = useForm()
	const finalDate = useForm()

	const {currentStock, historic, setHistoric} = React.useContext(StockContext)
	const [buttonDisabled, setButtonDisabled] = React.useState(true)
	const [loading, setLoading] = React.useState(false)

	React.useEffect(() => {
		if(!initialDate.value || !finalDate.value || currentStock.length === 0) setButtonDisabled(true)
		else setButtonDisabled(false)
	}, [initialDate.value, finalDate.value, currentStock])

	const onSubmit = async (e) => {
    setLoading(true)
		const response = await handleSubmit(e, 
			{currentStock, initialDate: initialDate.value, finalDate: finalDate.value}, 'historic')
		if(response && Object?.keys(response)?.length > 0) setHistoric(response)
    setLoading(false)
	}

  return (
    <Card data-testid="historic" title="Histórico">
      <form className="grid_form" onSubmit={(e) => onSubmit(e)}>
        <div>
          <Input
            label={'Data da inicial'}
            type={'date'}
            name={'initialDate'}
            {...initialDate}
          />
          <Input
            label={'Data Final'}
            type={'date'}
            name={'finalDate'}
            {...finalDate}
          />
        </div>

        <div className="button_align">
          <ButtonApp
            label={'Consultar'}
            canDisable={true}
            disabled={buttonDisabled}
            tooltip={'Consultar'}
          />
        </div>
      </form>
      {
        loading && 
        <div className="flex justify-content-center align-items-center mt-3 spinner_height">
          <ProgressSpinner />
        </div>
      }
      {!loading && Object.keys(historic).length === 0 && process.env.NODE_ENV !== 'test' && (
        <HistoricGraph historic={emptyDataset} />
      )}
      {!loading && Object.keys(historic).length > 0 && (
        <HistoricGraph historic={historic} />
      )}
    </Card>
  )
}
