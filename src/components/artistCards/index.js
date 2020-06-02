import React from 'react'
import { Card, Container, Image, Overlay } from './styles'

export const ArtistCards = ({ url, name }) => {
  return (
    <Card>
      <Container>
        <Image background={url} />
        <Overlay className="overlay">
          <p>Agregar a la lista</p>
        </Overlay>
      </Container>
      <p>{name}</p>
    </Card>
  )
}
