import React, { useState, useEffect } from 'react'
import { ArtistSong } from '../ArtistSong'
import { PlaylistTitle, Grid } from './styles'

export const RecommendedPlaylist = ({ artist: { name, id } }) => {
  const token = window.localStorage.getItem('access_token')
  const [artists, setArtists] = useState([])

  useEffect(() => {
    const relatedURL = `https://api.spotify.com/v1/artists/${id}/related-artists`

    window.fetch(relatedURL, {
      headers: {
        // eslint-disable-next-line quote-props
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(data => {
        setArtists(data.artists)
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
          artists.map(artist => {
            return (
              <ArtistSong key={artist.id} id={artist.id} />
            )
          })
        }
      </Grid>
    </div>
  )
}
