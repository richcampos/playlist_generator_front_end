import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyles } from './styles/GlobalStyles'
import { NavBar } from './components/NavBar'

import { Home } from './pages/Home/index'
import { Dashboard } from './pages/Dashboard/index'
import { Callback } from './pages/Callback/index'
import { AccessDenied } from './pages/AccessDenied/index'
import { NotFound } from './pages/NotFound'

export const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <NavBar />
      <Switch>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route path='/callback'>
          <Callback />
        </Route>
        <Route path='/access_denied'>
          <AccessDenied />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
        <Route path='*'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}
