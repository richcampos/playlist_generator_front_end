import React, { createContext, useState } from 'react'

export const Context = createContext()

const Provider = ({ children }) => {
  const [songs, setSongs] = useState([])

  const playlist = {
    songs,
    updateSongs: value => {
      setSongs(oldSongs => [...oldSongs, value])
    },
    deleteSong: value => {
      setSongs(oldSongs => {
        oldSongs.splice(value, 1)
        return [...oldSongs]
      })
    },
    clearSongs: value => {
      setSongs(oldSongs => {
        oldSongs.splice(0)
        return [...oldSongs]
      })
    }
  }

  return (
    <Context.Provider value={playlist}>
      {children}
    </Context.Provider>
  )
}

export default {
  Provider,
  Consumer: Context.Consumer
}
