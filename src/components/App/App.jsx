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

  addChild = (child) => {
    // Give the new child an id which is +1 higher than the last child's id
    child.id = this.state.children.length + 1
    // Get copy of the full current state by using ..., then add the new child object by adding a comma then the child argument to add the new child object
    let children = [...this.state.children, child]
    // Now we add the new children array with the current children and the new child to the state
    this.setState({
      children: children
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
