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

  submitHandler = e => {
    e.preventDefault()
    this.props.addChild(this.state)
    // Final validation before submitting to server
    console.log('SUBMITTED:', this.state)
  }

  render() {
    return (
      <div className="col s12 m6">
        <form className="col s12" onSubmit={this.submitHandler}>
          <div className="row">
            <div className="input-field col s12 input-margin">
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
            <div className="input-field col s12 input-margin">
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
          </div>
          <button
            type="submit"
            className="col s12 btn waves-effect amber blue-grey-text text-darken-4"
          >
            Add Child
          </button>
        </form>
      </div>
    )
  }
}
