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
          With: <strong>{props.parent}</strong>
        </p>
          Activity: <strong>{props.activity}</strong>
        <span className="secondary-content">
        <i
          class="material-icons right blue-grey-text"
          onClick={() => {
            props.delSched(props.firstName, props.date)
          }}
        >
          delete
        </i>
        </span>
      </li>
    </ul>
  </React.Fragment>
)

export default ScheduleList
