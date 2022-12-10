import React from 'react'
import styles from './Input.module.css'
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { addLocale } from 'primereact/api';
import { InputNumber } from 'primereact/inputnumber';
import { Chips } from 'primereact/chips';


export const Input = ({label, type, name, value, onChange, error, errorMessage}) => {
	addLocale('pt-br', {
		firstDayOfWeek: 0,
		dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
		dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
		dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
		monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
			'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
		monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
		today: 'Hoje',
		clear: 'Limpar'
});

  return (
    <>
			{type === 'text' && 
				<div className={styles.container}>
					<label htmlFor={name} className={styles.label}>{label}</label>
					<InputText 
						id={name}
						value={value}
						onChange={onChange}
					/>
					{error && 
					<small 
						id={name}
						className="p-error block"
					>
						{errorMessage}
					</small>}
				</div>
			}
			{
				type === 'date' && 
					<div className="field">
						<label htmlFor={name}>{label}</label>
						<Calendar 
							id={name}
							value={value}
							onChange={onChange}
							locale='pt-br'
							dateFormat="dd/mm/yy"
							showIcon
							maxDate={new Date()}
						/>
					</div>
			}
			{
				type === 'number' &&
				<div className="field">
					<label htmlFor="horizontal">{label}</label>
					<InputNumber 
						inputId="horizontal"
						value={value}
						onValueChange={onChange}
						showButtons
						buttonLayout="horizontal"
						step={0.5}
						min={0}
						decrementButtonClassName="p-button-danger"
						incrementButtonClassName="p-button-success"
						incrementButtonIcon="pi pi-plus"
						decrementButtonIcon="pi pi-minus"
					/>
				</div>
			}
			{
				type === 'chips' && 
				<Chips value={value} onChange={onChange}></Chips>
			}

    </>
  )
}
