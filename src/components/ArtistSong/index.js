import React from 'react'
import { Container, Title, Subtitle } from './styles'

export const ArtistSong = ({ song }) => {
  return (
    <Container>
      <Title>{song.name}</Title>
      <br />
      <Subtitle>
        {song.artists[0].name} - {song.album.name}
      </Subtitle>
    </Container>
  )
}
