import React from 'react'
import styles from './Input.module.css'
import { InputText } from 'primereact/inputtext';

export const Input = ({label, type, name, value, onChange, error, errorMessage}) => {
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

    </>
  )
}
