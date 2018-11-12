import React from 'react'
import './header.css'

export default class Header extends React.Component {

  render() {
    return (
        <header>
          <nav>
            <div className="nav-wrapper blue-grey darken-4">
              <a href="/#" className="brand-logo center">
                <img src="/images/logo.png" alt="Nest" className='logo'></img>
              </a>
            </div>
          </nav>
        </header>
    )
  }
}
