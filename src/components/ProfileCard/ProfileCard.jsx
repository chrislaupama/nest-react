import React from 'react'
import { Link } from 'react-router-dom'
import { Modal, Button } from 'react-materialize'
import Profile from '../Profile/Profile';

const ProfileCard = props => {
  return (
    <div className="col s12 m6">
      <div className="card blue-grey darken-2 z-depth-4">
        <div className="card-content white-text">
          <span className="card-title amber-text">
            {props.firstName}'s Schedule
          </span>
        </div>
        <div className="card-action">
          <Modal
            className="blue-grey darken-4"
            actions={
              <Button
                className="blue-grey darken-4"
                waves="light"
                modal="close"
                flat
              >
                <span className="amber-text">Close</span>
              </Button>
            }
            trigger={
              <a href="/#/">
                <i className="material-icons amber-text">calendar_today</i>
              </a>
            }
          >
            <Profile firstName={props.firstName} schedules={props.schedules} key={props.id} />
          </Modal>
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
