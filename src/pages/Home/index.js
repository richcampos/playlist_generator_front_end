/* eslint-disable react/jsx-fragments */
import React, { useState, useEffect } from 'react'
import { Logo, Search, Top } from './styles'
import logo from '../../assets/images/logo.svg'
import { setTokenInStorage } from '../../services/getAPIToken'
import { ListOfArtistCards } from '../../components/listOfArtistCards'

export const Home = () => {
  const [query, setQuery] = useState('')
  let inputValue = ''

  if(!localStorage.getItem('token')){
    setTokenInStorage()
  }

  function changeHandler (e) {
    inputValue = e.target.value
  }
  
  function clickHandler (e) {
    e.preventDefault()
    setQuery(inputValue)
  }

  return (
    <Top>
      <Logo to='/'>
        <img src={logo} />
      </Logo>
      <Search>
        <form>
          <p>Busca un artista</p>
          <input onChange={changeHandler} placeholder='Muse, The Weekend, Zoe' />
          <div>
            <button onClick={clickHandler} >Buscar</button>
          </div>
        </form>
      </Search>
      <ListOfArtistCards  query={query} />
    </Top>
  )
}
