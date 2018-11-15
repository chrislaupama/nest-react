import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import AddChild from '../AddChild/AddChild'
import { Modal, Button } from 'react-materialize'

export default class App extends React.Component {
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

  newChild = child => {
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
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="center" />
          </div>
          <div className="row">
            {this.state.children.map(child => {
              return <ProfileCard firstName={child.firstName} key={child.id} />
            })}
            <div className="col s12 m6">
              <div className="card blue-grey darken-3 z-depth-0">
                <div className="card-content">
                  <span className="card-title amber-text">Add Child</span>
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
                        <i className="material-icons amber-text">add</i>
                      </a>
                    }
                  >
                    <AddChild newChild={this.newChild} />
                  </Modal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
