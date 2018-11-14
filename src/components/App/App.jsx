import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import AddChild from '../AddChild/AddChild'
import FloatingButton from '../FloatingButton/FloatingButton'
// import { DB_CONFIG } '../../Config/Config'

export default class Main extends React.Component {
  state = {
    children: [
      {
        id: 1,
        firstName: 'Bella',
        lastName: 'Laupama'
      },
      {
        id: 2,
        firstName: 'Cara',
        lastName: 'Malane'
      },
      {
        id: 3,
        firstName: 'Mila',
        lastName: 'Laupama'
      }
    ]
  }

  addChild(child) {
    const prevChildren = this.state.children
    this.state.children.push({id: child.length +1, firstName: child.firstName, lastname: child.lastName })
    this.setState({
      children: prevChildren
    })
  }

  render() {
    return (
      <div className="section">
        <div className="row">
          {this.state.children.map(child => {
            return (
              <ProfileCard
                firstName={child.firstName}
                lastName={child.lastName}
                id={child.id}
                key={child.id}
              />
            )
          })}
          <AddChild addChild={this.addChild}/>
        </div>
        <FloatingButton />
      </div>
    )
  }
}
