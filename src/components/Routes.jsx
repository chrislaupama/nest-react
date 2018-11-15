import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header/Header'
import App from './App/App'
import Footer from './Footer/Footer'
import Login from './Login/Login'
import Profile from './Profile/Profile'

export default class Index extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Login} />
          <Route path="/app" exact component={App} />
          <Route path="/app/profile" component={Profile} />
          <Route path="/app" component={Footer} />
        </div>
      </Router>
    )
  }
}
