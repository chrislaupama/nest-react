import React from 'react'
import './editchild.css'
import { Input } from 'react-materialize'

export default class EditChild extends React.Component {
  state = {
    id: this.props.id,
    firstName: this.props.firstName,
    lastName: this.props.lastName,
    profile: this.props.profile,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.editChild(this.state.id, this.state.firstName, this.state.lastName, this.state.profile)
    console.log('SUBMITTED:', this.state)
    this.setState({
      firstName: '',
      lastName: '',
      profile: ''
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
                placeholder={this.props.firstName}
                type="text"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleChange}
                id="first_name"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 input-margin">
              <input
                className="amber-text"
                placeholder={this.props.lastName}
                type="text"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleChange}
                id="last_name"
              />
            </div>
          </div>

              <Input
                className="amber-text"
                type="select"
                name="profile"
                value={this.state.profile}
                onChange={this.handleChange}
              >
                <option value="child_care">Child</option>
                <option value="pets">Pet</option>
                <option value="face">Person</option>
              </Input>

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
