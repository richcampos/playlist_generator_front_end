import React, { useState, useEffect } from 'react'
import { getUserData } from '../../services/getUserData'
import { getUserPlaylists } from '../../services/getUserPlaylists'
import { Top } from './styles'

export const Header = () => {
  const [userData, setUserData] = useState([])
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    getUserData(setUserData)
    getUserPlaylists(setPlaylists)
  }, [])

  // console.log(userData)
  return (
    <Top>
      <h2>Bienvenido {userData.id}</h2>
      {
        playlists.map(playlist => {
          return (
            <p key={playlist.id}>{playlist.name}</p>
          )
        })
      }
    </Top>
  )
}
