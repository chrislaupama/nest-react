import React from 'react'
import { Link } from 'react-router-dom'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="container">
        <footer className="page-footer blue-grey darken-4">
          <div className="row">
            <div className="col s12">
              <div className="card-panel blue-grey darken-3">
                <span className="grey-text text-lighten-1">
                  NEST is an application developed to help modern families keep
                  the daily, weekly, monthly and annual scheduling of a child's
                  activities simple.
                </span>
              </div>
            </div>
          </div>
          <div className="center footer-copyright">
            <div className="container">
              <Link to="/">© 2018 Chris Laupama</Link>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
