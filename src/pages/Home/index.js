/* eslint-disable react/jsx-fragments */
import React from 'react'
import { Logo, Search, Top } from './styles'
import logo from '../../assets/images/logo.svg'

export const Home = () => {
  return (
    <Top>
      <Logo to='/'>
        <img src={logo} />
      </Logo>
      <Search>
        <div>
          <p>Busca un artista</p>
          <input placeholder='Muse, The Weekend, Zoe' />
        </div>
      </Search>
    </Top>
  )
}
