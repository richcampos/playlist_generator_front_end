/* eslint-disable quote-props */
import React, { useState } from 'react'
import { Header } from '../../components/Header'
import { Container, Bottom } from './styles'
import { RecommendedPlaylist } from '../../components/RecommendedPlaylist'

export const Dashboard = () => {
  const [query, setQuery] = useState('')
  const [artist, setArtist] = useState({})
  const [invalidForm, setInvalidForm] = useState(true)
  const token = window.localStorage.getItem('access_token')

  function changeHandler (event) {
    setQuery(event.target.value)
  }

  function submitHandler (event) {
    event.preventDefault()

    if (query !== '') {
      const url = `https://api.spotify.com/v1/search?q=${query}&type=artist`
      window.fetch(url, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
        .then(response => response.json())
        .then(data => {
          setArtist(data.artists.items[0])
          setInvalidForm(false)
        })
    } else {
      setInvalidForm(true)
    }
  }

  return (
    <div>
      <Header />
      <Container>
        <p>Serch for an artist and we will make a playlist for you</p>
        <form onSubmit={submitHandler}>
          {
            invalidForm
              ? <label className='warning'><sup>*</sup>Write an artist</label>
              : <label />
          }
          <input onChange={changeHandler} placeholder='The Weekend, Muse, Metallica' />
          <button type='submit'>Make playlist</button>
        </form>
      </Container>
      <Bottom>
        {
          invalidForm
            ? <div />
            : <RecommendedPlaylist artist={artist} />
        }
      </Bottom>
    </div>
  )
}
