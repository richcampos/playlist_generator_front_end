import React, { useState, useEffect } from 'react'
import { ArtistSong } from '../ArtistSong'
import { PlaylistTitle, Grid } from './styles'

export const RecommendedPlaylist = ({ id, name }) => {
  const token = window.localStorage.getItem('access_token')
  const [songs, setSongs] = useState([])

  useEffect(() => {
    const relatedURL = `https://api.spotify.com/v1/artists/${id}/related-artists`
    const country = window.localStorage.getItem('country')
    const playlistSongs = []

    window.fetch(relatedURL, {
      headers: {
        // eslint-disable-next-line quote-props
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        const artists = data.artists.map(artist => {
          const id = artist.id

          return id
        })

        artists.forEach(id => {
          const url = `https://api.spotify.com/v1/artists/${id}/top-tracks?country=${country}`

          window.fetch(url, {
            headers: {
              // eslint-disable-next-line quote-props
              'Authorization': `Bearer ${token}`
            }
          })
            .then(response => response.json())
            .then(data => {
              const randomTrack = Math.floor(Math.random() * 10)
              playlistSongs.push(data.tracks[randomTrack])
              console.log(playlistSongs)
              setSongs(playlistSongs)
            })
        })
      })
  }, [id])

  return (
    <div>
      {
        name
          ? <PlaylistTitle>{name}'s related playlist</PlaylistTitle>
          : <div />
      }
      <Grid>
        {
          songs.map(song => {
            return (
              <ArtistSong key={song.id} song={song} />
            )
          })
        }
      </Grid>
    </div>
  )
}
