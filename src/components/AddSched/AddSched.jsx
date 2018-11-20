import React from 'react'
import 'jquery'
import 'materialize-css/dist/js/materialize.js'
import 'materialize-css/dist/css/materialize.css'
import { Input } from 'react-materialize'
import './addsched.css'

export default class AddSched extends React.Component {
  state = {
    date: '',
    parent: '',
    activity: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = e => {
    e.preventDefault()
    this.props.addSched(this.props.id, this.state)
    // Final validation before submitting to server
    console.log('SUBMITTED:', this.state)
    // Clear the state to clear the form
    this.setState({
      date: '',
      parent: '',
      activity: ''
    })
  }

  render() {
    return (
      <div className="col s12 m6">
        <form className="col s12" onSubmit={this.submitHandler}>
          <div className="center">
            <Input
              className="amber-text"
              type="date"
              name="date"
              placeholder="Date"
              value={this.state.date}
              onChange={this.handleChange}
            />
          </div>
          <div className="row">
            <div className="input-field col s12 input-margin">
              <input
                className="amber-text"
                type="text"
                name="parent"
                value={this.state.parent}
                onChange={this.handleChange}
                id="parent"
              />
              <label for="parent">Caregiver</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12 input-margin">
              <input
                className="amber-text"
                type="text"
                name="activity"
                value={this.state.activity}
                onChange={this.handleChange}
                id="activity"
              />
              <label for="activity">Activity</label>
            </div>
          </div>
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
