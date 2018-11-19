import { React, Fragment } from 'react'

const ScheduleList = props => (
  <Fragment>
    <ul className="collection">
      <li className="collection-item avatar blue-grey darken-2 white-text">
        <i className="material-icons circle amber lighten-1 blue-grey-text text-darken-3">
          perm_contact_calendar
        </i>
        <span className="title amber-text">{props.date}</span>
        <p>
          <strong>Parent:</strong> {props.parent}
        </p>
        <p>
          <strong>Activity:</strong> {props.activity}
        </p>
        <a href="#!" className="secondary-content">
          <i className="material-icons">grade</i>
        </a>
      </li>
    </ul>
  </Fragment>
)

export default ScheduleList
