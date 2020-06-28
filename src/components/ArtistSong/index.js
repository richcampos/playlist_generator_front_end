import React, { useState, useEffect, useContext } from 'react'
import { Container, Title, Subtitle } from './styles'
import { Context } from '../../Context'

export const ArtistSong = ({ id }) => {
  const [song, setSong] = useState({})
  const { updateSongs } = useContext(Context)

  useEffect(() => {
    const token = window.localStorage.getItem('access_token')
    const country = window.localStorage.getItem('country')
    const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=${country}`

    window.fetch(url, {
      headers: {
        // eslint-disable-next-line quote-props
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        const randomNumber = Math.floor(Math.random() * 10)
        const song = data.tracks[randomNumber]
        setSong(song)
        updateSongs(song)
      })
  }, [id])

  return (
    <Container>
      <Title>{song.name}</Title>
      <br />
      <Subtitle>
        {
          song.artists
            ? <span>{song.artists[0].name} - {song.album.name}</span>
            : <p />
        }
      </Subtitle>
    </Container>
  )
}
