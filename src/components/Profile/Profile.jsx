import React from 'react'
import ScheduleList from '../ScheduleList/SchduleList'

const Profile = props => (
  <div>
    <h3 className="center amber-text">{props.firstName}'s Schedule</h3>
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
)

export default Profile
