import React from 'react'

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center amber-text">Bella's Schedule</h2>
        </div>

        <ul className="collection">
          <li className="collection-item avatar blue-grey darken-2 white-text">
            <i className="material-icons circle amber lighten-1 blue-grey-text text-darken-3">
              perm_contact_calendar
            </i>
            <span className="title amber-text">25 December 2018</span>
            <p>
              <strong>Parent:</strong> Chris
            </p>
            <p>
              <strong>Activity:</strong> Christmas
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
          <li className="collection-item avatar blue-grey darken-2 white-text">
            <i className="material-icons circle amber lighten-1 blue-grey-text text-darken-3">
              perm_contact_calendar
            </i>
            <span className="title amber-text">31 December 2018</span>
            <p>
              <strong>Parent:</strong> Laura
            </p>
            <p>
              <strong>Activity:</strong> New Years Eve
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
          <li className="collection-item avatar blue-grey darken-2 white-text">
            <i className="material-icons circle amber lighten-1 blue-grey-text text-darken-3">
              perm_contact_calendar
            </i>
            <span className="title amber-text">1 January 2019</span>
            <p>
              <strong>Parent:</strong> Mischa
            </p>
            <p>
              <strong>Activity:</strong> New Years Day
            </p>
            <a href="#!" className="secondary-content">
              <i className="material-icons">grade</i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}
