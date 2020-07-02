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
        console.log(oldSongs)
        return [...oldSongs]
      })

      // songs.forEach(song => {
      //   console.log(song.name)
      // })
    },
    clearSongs: value => {
      setSongs([])
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
