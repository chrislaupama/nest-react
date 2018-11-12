import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper blue-grey darken-4">
            <Link to="/app">
              <a href="/#" className="brand-logo center">
                <img src="/images/logo.png" alt="Nest" className="logo" />
              </a>
            </Link>
          </div>
        </nav>
      </header>
    )
  }
}
