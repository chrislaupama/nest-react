import React from 'react'

const ScheduleList = props => (
  <React.Fragment>
    <ul className="collection">
      <li className="collection-item avatar blue-grey darken-3 white-text">
        <i className="material-icons circle amber lighten-1 blue-grey-text text-darken-3">
          perm_contact_calendar
        </i>
        <span className="title amber-text">{props.date}</span>
        <p>
          <strong>With:</strong> {props.parent}
        </p>
        <p>
          <strong>Activity:</strong> {props.activity}
        </p>
        <a href="#!" className="secondary-content">
          <i className="material-icons blue-grey-text">delete</i>
        </a>
      </li>
    </ul>
  </React.Fragment>
)

export default ScheduleList
