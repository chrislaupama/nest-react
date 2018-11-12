import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <div className="row">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <input
                id="first_name"
                type="text"
                className="validate amber-text"
              />
              <label for="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input
                id="last_name"
                type="text"
                className="validate amber-text"
              />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="password" type="password" className="validate" />
              <label for="password">Password</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input id="email" type="email" className="validate amber-text" />
              <label for="email">Email</label>
              <span
                className="helper-text grey-text text-darken-2"
                data-error="Please enter a valid email address."
                data-success="Accepted."
              >
                Your information will not be shared with any third parties.
              </span>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
