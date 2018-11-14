import React from 'react'

export default class Main extends React.Component {
  state = {
    child: [
      {
        id: 1,
        name: Bella
      },
      {
        id: 2,
        name: Cara
      }
    ]
  }
  render() {
    return (
      <div className="section">
        <div className="row">
          <ProfileCard />
        </div>
      </div>
    )
  }
}
