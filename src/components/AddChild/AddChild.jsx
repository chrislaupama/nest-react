import React from 'react'
import './addchild.css'
// import { Input } from 'react-materialize'

export default class AddChild extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    schedules: []
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.newChild(this.state)
    // Final validation before submitting to server
    console.log('SUBMITTED:', this.state)
    // Clear the state to clear the form
    this.setState({
      firstName: '',
      lastName: ''
    })
  }

  render() {
    return (
      <div className="col s12 m6">
        <form className="col s12" onSubmit={this.submitHandler}>
          <div className="row">
            <div className="input-field col s12 input-margin">
              <input
                className="amber-text"
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
                className="amber-text"
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                id="last_name"
              />
              <label for="last_name">Last Name</label>
            </div>
          </div>
          {/* <Input
            placeholder="Profile Type"
            type="select"
            className="amber-text"
          >
          TODO: Need to get the selection of the options to display icon on profile card
            <option className="amber-text" name="profile" value={this.state.profile} onChange={this.handleChange}>Child</option>
            <option className="amber-text" name="profile" value={this.state.profile} onChange={this.handleChange}>Pet</option>
            <option className="amber-text" name="profile" value={this.state.profile} onChange={this.handleChange}>Person</option>
          </Input> */}
          <div className="center">
            <button type="submit" className="btn-floating btn-large amber">
              <i className="material-icons blue-grey-text text-darken-4">add</i>
            </button>
          </div>
        </form>
      </div>
    )
  }
}
