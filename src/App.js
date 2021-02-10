import React from 'react'
import {PublicRoute} from './router/PublicRoute/PublicRoute'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {Redirect} from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import MainLayout from './layouts/MainLayout/MainLayout'
import './App.scss'


function App() {
  return (
      <div>
          <Router basename={`/`}>
              <Switch>
                  <PublicRoute exact path={`/`} component={() => (<Redirect to={`/home`}/>)} layout={MainLayout}/>
                  <PublicRoute path={`/home`} component={HomePage} layout={MainLayout}/>
              </Switch>
          </Router>
      </div>
  )
}

export default App
