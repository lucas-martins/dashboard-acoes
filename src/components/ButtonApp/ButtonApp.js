import React from 'react'
import { Button } from 'primereact/button';

export const ButtonApp = ({label}) => {
  return (
    <Button label={label} aria-label={label} />
  )
}
