import React from 'react'
import { Card } from 'primereact/card';

import { StockContext } from '../../StockContext';
import useForm from '../../hooks/useForm';
import { handleSubmit } from '../../helpers/HandleSubmit';

import { Input } from '../Input/Input';
import { ButtonApp } from '../ButtonApp/ButtonApp';
import { HistoricGraph } from './HistoricGraph';

export const HistoricCard = () => {
	const initialDate = useForm()
	const finalDate = useForm()

	const {currentStock, historic, setHistoric} = React.useContext(StockContext)
	const [buttonDisabled, setButtonDisabled] = React.useState(true)

	React.useEffect(() => {
		if(!initialDate.value || !finalDate.value || currentStock.length === 0) setButtonDisabled(true)
		else setButtonDisabled(false)
	}, [initialDate.value, finalDate.value, currentStock])

	const onSubmit = async (e) => {
		const response = await handleSubmit(e, 
			{currentStock, initialDate: initialDate.value, finalDate: finalDate.value}, 'historic')
		if(response && Object?.keys(response)?.length > 0) setHistoric(response)
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
          />
        </div>
      </form>
      {Object.keys(historic).length > 0 && (
        <HistoricGraph historic={historic} />
      )}
    </Card>
  )
}
