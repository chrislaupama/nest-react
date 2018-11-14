import React from 'react'
import { Link } from 'react-router-dom'
import './login.css'

export default class Login extends React.Component {
  render() {
    return (
      <div className="section">
        <center>
          <div className="section" />
          <div className="container">
            <div className="z-depth-1 blue-grey darken-4 row login-box">

              <form className="col s12">
                <div className="row">
                  <div className="col s12" />
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input
                      className="validate amber-text"
                      type="email"
                      name="email"
                      id="email"
                    />
                    <label for="email">Email</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input
                      className="validate amber-text"
                      type="password"
                      name="password"
                      id="password"
                    />
                    <label for="password">Password</label>
                  </div>
                  <label>
                    <a className="blue-grey-text text-darken-1" href="#!">
                      <b>Forgot Password?</b>
                    </a>
                  </label>
                </div>

                <br />
                  <div className="row">
                    <Link to="/app">
                      <button
                        type="submit"
                        name="btn_login"
                        className="col s12 btn btn-large waves-effect amber blue-grey-text text-darken-4"
                      >
                        Login
                      </button>
                    </Link>
                  </div>
                <div className="section" />
              </form>

            </div>
          </div>
          <a className="blue-grey-text text-darken-1" href="#!">Create account</a>
        </center>
      </div>
    )
  }
}
