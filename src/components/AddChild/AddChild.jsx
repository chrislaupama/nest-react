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
          <h4 className="amber-text">Add Child</h4>
          <div className="z-depth-1 blue-grey darken-4 row login-box">
            <div className="container">
              <div className="row">
                <form className="col s12">
                  <div className="row">
                    <div className="input-field col s6">
                      <input
                        id="first_name"
                        name="firstName"
                        type="text"
                        value={this.state.firstName}
                        onChange={this.handleChange}
                        className="validate amber-text"
                      />
                      <label for="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                      <input
                        id="last_name"
                        name="lastName"
                        type="text"
                        value={this.state.lastName}
                        onChange={this.handleChange}
                        className="validate amber-text"
                      />
                      <label for="last_name">Last Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <button className="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </center>
      </div>
    )
  }
}
