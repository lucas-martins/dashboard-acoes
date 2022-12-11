import React from 'react'
import { Button } from 'primereact/button';

export const ButtonApp = ({label, type, tooltip, canDisable, disabled}) => {
  return (
    <Button 
      data-testid="button"
      label={label}
      aria-label={label}
      type={type}
      tooltip={tooltip}
      disabled={!canDisable ? false : disabled ? true : false }
    />
  )
}
