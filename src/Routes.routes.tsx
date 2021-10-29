import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MenuNavbar } from './components/MenuNavbar'
import { Home } from './pages/Home'
import { Post } from './pages/Post'

export default function Router() {
  return (
    <BrowserRouter>
      <MenuNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:id">
          <Post />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
