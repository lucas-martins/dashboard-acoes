import React from 'react'
import { Button } from 'primereact/button';
import { PrimeIcons } from 'primereact/api';

export const ButtonApp = ({label, type, tooltip, canDisable, disabled, hasIcon, icon}) => {
  return (
    <Button 
      data-testid={hasIcon ? 'icon' : 'button'}
      label={label}
      aria-label={label}
      type={type}
      tooltipOptions={{position: 'top'}}
      tooltip={tooltip}
      icon={PrimeIcons[icon]}
      disabled={!canDisable ? false : disabled ? true : false }
    />
  )
}
