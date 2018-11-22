import React from 'react'
import { Modal, Button } from 'react-materialize'
import Profile from '../Profile/Profile'
import AddSched from '../AddSched/AddSched'
import EditChild from '../EditChild/EditChild'

const ProfileCard = props => (
  <div className="col s12 m6">
    <div className="card blue-grey darken-2 z-depth-4">
      <div className="card-content">
        <span className="card-title amber-text">
          {props.firstName}'s Schedule
          <i class="right amber-text material-icons">{props.profile}</i>
        </span>
      </div>
      <div className="card-action">
        <i
          class="material-icons right blue-grey-text text-lighten-2"
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
          trigger={
            <i className="material-icons right blue-grey-text text-lighten-2">
              edit
            </i>
          }
        >
          <EditChild editChild={props.editChild} firstName={props.firstName} lastName={props.lastName} profile={props.profile} id={props.id} />
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
          trigger={
            <i className="material-icons right blue-grey-text text-lighten-2">
              add
            </i>
          }
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
            delSched={props.delSched}
            firstName={props.firstName}
            lastName={props.lastName}
            schedules={props.schedules}
            profile={props.profile}
            key={props.id}
          />
        </Modal>
      </div>
    </div>
  </div>
)

export default ProfileCard
