/* eslint-disable react/jsx-fragments */
import React, { useState } from 'react'
import { Logo, SearchCont, Top } from './styles'
import logo from '../../assets/images/logo.svg'
import { setTokenInStorage } from '../../services/getAPIToken'
import { ListOfArtistCards } from '../../components/listOfArtistCards'

export const Search = () => {
  const [query, setQuery] = useState('')
  let inputValue = ''
  const date = new Date()
  const actualDate = date.getTime()
  const expirationDate = !window.localStorage.getItem('expiration_date') ? 0 : window.localStorage.getItem('expiration_date')

  if (actualDate > expirationDate) {
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
      <SearchCont>
        <form>
          <p>Busca un artista</p>
          <input onChange={changeHandler} placeholder='Muse, The Weekend, Zoe' />
          <div>
            <button onClick={clickHandler}>Buscar</button>
          </div>
        </form>
      </SearchCont>
      <ListOfArtistCards query={query} />
    </Top>
  )
}
