import React, { useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './store'
import './App.scss'

import Home from './pages/Home'

const store = createStore()

export default function App () {
  useEffect(() => {
    document.documentElement.className = ''
    document.documentElement.classList.add('theme-dark')
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}
