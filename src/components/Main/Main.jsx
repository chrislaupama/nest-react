import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'

export default class Main extends React.Component {
  state = {
    children: [
      {
        id: 1,
        firstName: "Bella",
        lastName: "Laupama"
      },
      {
        id: 2,
        firstName: "Cara",
        lastName: "Malane"
      },
      {
        id: 3,
        firstName: "Mila",
        lastName: "Laupama"
      }
    ]
  }
  render() {
    return (
      <div className="section">
        <div className="row">
        {
          this.state.children.map((child) => {
            return (
              <ProfileCard firstName={child.firstName} lastName={child.lastNamelastName} id={child.id} key={child.id} />
            )
          })
        }
        </div>
      </div>
    )
  }
}
