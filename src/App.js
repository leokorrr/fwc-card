import './App.scss'
import {PublicRoute} from './router/PublicRoute/PublicRoute'
import {BrowserRouter as Router, Switch} from 'react-router-dom'
import {Redirect} from 'react-router'
import HomePage from './pages/HomePage/HomePage'
import MainLayout from './layouts/MainLayout/MainLayout'


function App() {
  return (
    <Router basename={`/`}>
        <Switch>
            <PublicRoute exec path={`/`} component={() => (<Redirect to={`/home`}/>)} layout={MainLayout}/>
            <PublicRoute path={`/home`} component={HomePage} layout={MainLayout}/>
        </Switch>
    </Router>
  )
}

export default App
