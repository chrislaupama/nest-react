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
        lastName: 'Laupama',
        schedules: [
          {
            id: 1,
            date: '25 December 2018',
            parent: 'Chris',
            activity: 'Christmas'
          },
          {
            id: 2,
            date: '31 December 2018',
            parent: 'Laura',
            activity: 'New Years Eve'
          }
        ]
      },
      {
        id: 2,
        firstName: 'Cara',
        lastName: 'Malane',
        schedules: [
          {
            id: 1,
            date: '25 December 2018',
            parent: 'Chris',
            activity: 'Christmas'
          },
          {
            id: 2,
            date: '31 December 2018',
            parent: 'Laura',
            activity: 'New Years Eve'
          },
          {
            id: 3,
            date: '15 Janurary 2019',
            parent: 'Mischa',
            activity: 'Singapore Trip'
          }
        ]
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

  delChild = firstName => {
    let children = [...this.state.children]
    let newState = children.filter(child => child.firstName !== firstName)
    this.setState({
      children: newState
    })
  }

  addSched = (id, schedule) => {
    const newSched = this.state.children.map(child => {
      if (child.id !== id) return child
      return {
        ...child,
        schedules: [...child.schedules, schedule]
      }
    })
    this.setState({ children: newSched })
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
              return (
                <ProfileCard
                  delChild={this.delChild}
                  addSched={this.addSched}
                  firstName={child.firstName}
                  schedules={child.schedules}
                  id={child.id}
                  key={child.id}
                />
              )
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
                      <Button modal="close" flat>
                        <i className="material-icons blue-grey-text text-darken-4">
                          close
                        </i>
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
