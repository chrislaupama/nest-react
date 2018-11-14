import React from 'react'
import './addchild.css'

export default class Footer extends React.Component {
  state = {
    firstName: '',
    lastName: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div className="section">
        <center>
          <div className="section" />
          <h3 className="amber-text">Add Child</h3>
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
                      type="text"
                      name="firstName"
                      value={this.state.firstName}
                      onChange={this.handleChange}
                      id="first_name"
                    />
                    <label for="first_name">First Name</label>
                  </div>
                </div>

                <div className="row">
                  <div className="input-field col s12">
                    <input
                      className="validate amber-text"
                      type="text"
                      name="lastName"
                      value={this.state.lastName}
                      onChange={this.handleChange}
                      id="last_name"
                    />
                    <label for="last_name">Last Name</label>
                  </div>
                  <label>
                    <span className="blue-grey-text text-darken-1">
                      <b>Your information will never be shared.</b>
                    </span>
                  </label>
                </div>

                <br />
                  <div className="row">
                      <button
                        type="submit"
                        name="btn_login"
                        className="col s12 btn btn-large waves-effect amber blue-grey-text text-darken-4"
                      >
                        Submit
                      </button>
                  </div>
                <div className="section" />
              </form>

            </div>
          </div>
        </center>
      </div>
    )
  }
}
