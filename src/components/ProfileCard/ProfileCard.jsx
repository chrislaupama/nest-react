import React from 'react'
import { Modal, Button } from 'react-materialize'
import Profile from '../Profile/Profile'
import AddSched from '../AddSched/AddSched'

const ProfileCard = props => (
  <div className="col s12 m6">
    <div className="card blue-grey darken-2 z-depth-4">
      <div className="card-content">
        <span className="card-title amber-text">
          {props.firstName}'s Schedule
        </span>
      </div>
      <div className="card-action">
        <i
          class="material-icons right blue-grey-text"
          onClick={() => {
            props.delChild(props.firstName)
          }}
        >
          delete
        </i>
        <Modal
          className="blue-grey darken-4"
          actions={
            <Button modal="close" flat>
              <i className="material-icons blue-grey-text text-darken-4">
                close
              </i>
            </Button>
          }
          trigger={<i className="material-icons right blue-grey-text">add</i>}
        >
          <AddSched addSched={props.addSched} id={props.id} />
        </Modal>
        <Modal
          className="blue-grey darken-4"
          actions={
            <Button modal="close" flat>
              <i className="material-icons blue-grey-text text-darken-4">
                close
              </i>
            </Button>
          }
          trigger={<i className="material-icons amber-text">calendar_today</i>}
        >
          <Profile
            firstName={props.firstName}
            schedules={props.schedules}
            key={props.id}
          />
        </Modal>
      </div>
    </div>
  </div>
)

export default ProfileCard
