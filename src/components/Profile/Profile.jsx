import React from 'react'
import ScheduleList from '../ScheduleList/SchduleList'

const Profile = props => (
  <div className="container">
    <div className="container">
      <h2 className="center amber-text">{props.firstName}'s Schedule</h2>
      {props.schedules.map(sched => {
        return (
          <ScheduleList
            date={sched.date}
            parent={sched.parent}
            activity={sched.activity}
            key={sched.id}
          />
        )
      })}
    </div>
  </div>
)

export default Profile
