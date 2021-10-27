import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MenuNavbar } from './components/MenuNavbar'
import { Home } from './pages/Home'

export default function Router() {
  return (
    <BrowserRouter>
      <MenuNavbar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
