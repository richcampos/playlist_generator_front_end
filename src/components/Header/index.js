import React, { useState, useEffect } from 'react'
import { getUserData } from '../../services/getUserData'
import { Top } from './styles'

export const Header = () => {
  const [userData, setUserData] = useState([])

  useEffect(() => {
    getUserData(setUserData)
  }, [])

  window.localStorage.setItem('country', userData.country)
  window.localStorage.setItem('user_id', userData.id)

  return (
    <Top>
      <h2>Welcome {userData.id}</h2>
    </Top>
  )
}
