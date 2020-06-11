import React from 'react'
import { Router } from '@reach/router'
import { GlobalStyles } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home/index'
import { Dashboard } from './pages/Dashboard/index'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <div>
      <GlobalStyles />
      <NavBar />
      <Router>
        <NotFound default />
        <Home path='/' />
        <Dashboard path='/dashboard' />
      </Router>
    </div>
  )
}
