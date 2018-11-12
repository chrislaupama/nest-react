import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export default class Login extends React.Component {
  render() {
    return (
      <div className="section">
        <div className="valign-wrapper row login-box">
          <div className="blue-grey darken-3 col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4">
            <form>
              <div className="card-content">
                <span className="card-title center-align amber-text">
                  Login
                </span>
                <div className="row">
                  <div className="input-field col s12">
                    <label for="email">Email address</label>
                    <input
                      type="email"
                      className="validate amber-text"
                      name="email"
                      id="email"
                    />
                  </div>
                  <div className="input-field col s12">
                    <label for="password">Password </label>
                    <input
                      type="password"
                      className="validate amber-text"
                      name="password"
                      id="password"
                    />
                  </div>
                </div>
              </div>
              <div className="card-action center-align">
                <Link to="/app">
                  <button
                    className="btn waves-effect waves-light amber blue-grey-text text-darken-4"
                    type="submit"
                    name="action"
                  >
                    Submit
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
