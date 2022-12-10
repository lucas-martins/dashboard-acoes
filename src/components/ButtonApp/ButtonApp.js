import React from 'react'
import { Button } from 'primereact/button';

export const ButtonApp = ({label, tooltip, canDisable, disabled}) => {
  return (
    <Button 
      label={label}
      aria-label={label}
      tooltip={tooltip}
      disabled={!canDisable ? false : disabled ? true : false }
    />
  )
}
