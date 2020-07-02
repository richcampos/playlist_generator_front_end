/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable quote-props */
import React, { useState, useContext } from 'react'
import { Header } from '../../components/Header'
import { Container, Bottom, Success } from './styles'
import { RecommendedPlaylist } from '../../components/RecommendedPlaylist'

import { Context } from '../../Context'

export const Dashboard = () => {
  const [query, setQuery] = useState('')
  const [reset, setReset] = useState(true)
  const [success, setSuccess] = useState(false)
  const [artist, setArtist] = useState({})
  const [invalidForm, setInvalidForm] = useState(true)
  const token = window.localStorage.getItem('access_token')
  const { clearSongs } = useContext(Context)

  function changeHandler (event) {
    setQuery(event.target.value)
  }

  function submitHandler (event) {
    setReset(true)
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
      {
        success
          ? <Success>Enjoy your playlist in <a href='https://open.spotify.com' target='_blank' rel='noopener noreferrer'>Spotify</a></Success>
          : <p />
      }
      <Container>
        <p>Serch for an artist and we will make a playlist for you</p>
        <form onSubmit={submitHandler}>
          <input onChange={changeHandler} value={query} placeholder='The Weekend, Muse, Metallica' />
          <button type='submit'>Make playlist</button>
        </form>
      </Container>
      {
        reset
          ? <Bottom>
            {
              invalidForm
                ? <div />
                : <Context.Consumer>
                  {
                    ({ songs }) => {
                      function clickHandler () {
                        const userId = window.localStorage.getItem('user_id')
                        const url = `https://api.spotify.com/v1/users/${userId}/playlists`
                        const data = { 'name': `${artist.name}'s related Playlist` }

                        window.fetch(url, {
                          method: 'POST',
                          headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                          },
                          body: JSON.stringify(data)
                        })
                          .then(response => response.json())
                          .then(data => {
                            const playlistId = data.id
                            const playlistUrl = `https://api.spotify.com/v1/playlists/${playlistId}/tracks`
                            const uris = songs.map(song => {
                              return song.uri
                            })
                            const bodyData = { 'uris': uris }

                            window.fetch(playlistUrl, {
                              method: 'POST',
                              headers: {
                                'Authorization': `Bearer ${token}`,
                                'Content-Type': 'application/json'
                              },
                              body: JSON.stringify(bodyData)
                            })
                              .then(response => response.json())
                              .then(data => {
                                clearSongs([])
                                setSuccess(true)
                                setReset(false)
                                setQuery('')
                              })
                          })
                      }

                      return (
                        <div>
                          <RecommendedPlaylist artist={artist} />
                          <button onClick={clickHandler}>Agregar playlist</button>
                        </div>
                      )
                    }
                  }
                </Context.Consumer>
            }
          </Bottom>
          : <div />
      }
    </div>
  )
}
