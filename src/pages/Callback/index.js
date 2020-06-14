import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

export const Callback = () => {
  const location = useLocation()
  if (location.hash) {
    const query = location.hash.split('&')
    const accessToken = query[0].split('=')[1]
    const state = query[3].split('=')[1]
    const localState = window.localStorage.getItem('state')

    if (state === localState) {
      window.localStorage.setItem('access_token', accessToken)
      return (
        <Redirect to={{
          pathname: '/dashboard'
        }}
        />
      )
    } else {
      return (
        <Redirect to={{
          pathname: '/access_denied'
        }}
        />
      )
    }
  }

  return (
    <Redirect to={{
      pathname: '/access_denied'
    }}
    />
  )
}
