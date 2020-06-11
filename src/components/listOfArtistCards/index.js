import React, { useState, useEffect } from 'react'
import { Grid } from './styles'
import { ArtistCards } from '../artistCards'
import { searchArtist } from '../../services/searchArtist'
import DEFAULT_ALBUM from '../../assets/images/default_album.jpg'

export const ListOfArtistCards = ({ query }) => {
  const [artists, setArtists] = useState([])

  useEffect(() => {
    searchArtist(query, setArtists)
  }, [query])

  return (
    <Grid>
      {
        artists.map(artist => {
          return (
            artist.images[0]
              ? <ArtistCards key={artist.id} url={artist.images[0].url} name={artist.name} />
              : <ArtistCards key={artist.id} url={DEFAULT_ALBUM} name={artist.name} />
          )
        })
      }
    </Grid>
  )
}
