import React from 'react'
import { Cover } from './styles'
import { giveUserAccessToken } from '../../services/giveUserAccessToken'

export const Home = () => {
  return (
    <Cover>
      <p>Playlist generator with new music to discover <br /> from your Spotify account</p>
      <button onClick={giveUserAccessToken}>Log in with Spotify</button>
    </Cover>
  )
}
