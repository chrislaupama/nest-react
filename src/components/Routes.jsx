import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import Login from './Login/Login'
import Profile from './Profile/Profile'

export default class Routes extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Header} />
          <Route path="/" exact component={Login} />
          <Route path="/main" exact component={Main} />
          <Route path="/main/profile" component={Profile} />
          <Route path="/main" component={Footer} />
        </div>
      </Router>
    )
  }
}
