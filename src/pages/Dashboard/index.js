import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { Container, Bottom } from './styles'
import { searchArtist } from '../../services/searchArtist'
import { RecommendedPlaylist } from '../../components/RecommendedPlaylist'

export const Dashboard = () => {
  const [queryArtist, setQueryArtist] = useState({})
  const [invalidForm, setInvalidForm] = useState(false)
  let inputValue = ''

  function changeHandler (event) {
    inputValue = event.target.value
  }

  function clickHandler (event) {
    event.preventDefault()

    if (inputValue === '') setInvalidForm(true)
    else {
      setInvalidForm(false)
      searchArtist(inputValue, setQueryArtist)
    }
  }

  return (
    <div>
      <Header />
      <Container>
        <p>Serch for an artist and we will make a playlist for you</p>
        <form>
          {
            invalidForm
              ? <label className='warning'><sup>*</sup>Write an artist</label>
              : <label />
          }
          <input onChange={changeHandler} placeholder='The Weekend, Muse, Metallica' />
          <button onClick={clickHandler}>Make playlist</button>
        </form>
      </Container>
      <Bottom>
        <RecommendedPlaylist id={queryArtist.id} name={queryArtist.name} />
      </Bottom>
    </div>
  )
}
