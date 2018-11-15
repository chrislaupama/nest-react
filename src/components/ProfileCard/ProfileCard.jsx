import React from 'react'
import { Link } from 'react-router-dom'

const ProfileCard = props => {
  return (
    <div className="col s12 m6">
      <div className="card blue-grey darken-2 z-depth-4">
        <div className="card-content white-text">
          <span className="card-title amber-text">{props.firstName}'s Schedule</span>
        </div>
        <div className="card-action">
          <Link to="/main/profile">
            <a href="/#/">
              <i className="material-icons amber-text">calendar_today</i>
            </a>
          </Link>
          <Link to="/#">
            <a href="/#/">
              <i className="material-icons amber-text">add</i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProfileCard
