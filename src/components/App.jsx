import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import FloatingButton from './FloatingButton/FloatingButton'
import Login from './Login/Login'
import Add from './Add/Add'
import Profile from './Profile/Profile'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Login} />
          <Route path="/app" exact component={Main} />
          <Route path="/add" exact component={Add} />
          <Route path="/app/profile" component={Profile} />
          <Route path="/app" component={Footer} />
          <Route path="/app" component={FloatingButton} />
        </div>
      </Router>
    )
  }
}
