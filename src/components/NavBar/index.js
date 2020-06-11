import React from 'react'
import { Logo, Background } from './styles'
import logo from '../../assets/images/logo.svg'

export const NavBar = () => {
  return (
    <div>
      <Logo to='/'>
        <img src={logo} />
      </Logo>
      <Background />
    </div>
  )
}
