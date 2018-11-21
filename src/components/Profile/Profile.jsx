import React from 'react'
import ScheduleList from '../ScheduleList/SchduleList'

const Profile = props => (
  <div>
    <h3 className="center amber-text">
      {props.firstName} {props.lastName}'s Schedule
    </h3>
    {props.schedules.map(sched => {
      return (
        <ScheduleList
          delSched={props.delSched}
          firstName={props.firstName}
          date={sched.date}
          parent={sched.parent}
          activity={sched.activity}
          profile={props.profile}
          key={sched.id}
        />
      )
    })}
  </div>
)

export default Profile
