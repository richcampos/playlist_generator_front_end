import React from 'react'
import { Denied } from './styles'

export const AccessDenied = () => {
  return (
    <Denied>
      <p>Unauthorized</p>
      <p>Something went wrong :(</p>
      <button>Try again</button>
    </Denied>
  )
}
