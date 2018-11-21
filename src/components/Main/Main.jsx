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
        profile: 'child_care',
        schedules: [
          {
            id: 1,
            date: '25 December, 2018',
            parent: 'Chris',
            activity: 'Christmas'
          },
          {
            id: 2,
            date: '28 December, 2018',
            parent: 'Mischa',
            activity: 'Christmas with Malane Whanau'
          },
          {
            id: 3,
            date: '31 December, 2018',
            parent: 'Laura',
            activity: 'New Years Eve'
          },
          {
            id: 4,
            date: '1 January, 2019',
            parent: 'Laura',
            activity: 'New Years Day'
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

  delSched = (firstName, date) => {
    var children = this.state.children

    for (var i = 0; i < children.length; i++) {
      var child = this.state.children[i]

      if (child.firstName == firstName) {
        //Loop through the schedules
        for (var k = 0; k < child.schedules.length; k++) {
          var schedule = child.schedules[k]

          //remove schedule if date == date
          if (schedule.date == date) {
            child.schedules.splice(k, 1)
          }
          this.setState({children})
        }
      }
    }
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
                  delSched={this.delSched}
                  firstName={child.firstName}
                  lastName={child.lastName}
                  schedules={child.schedules}
                  profile={child.profile}
                  id={child.id}
                  key={child.id}
                />
              )
            })}
            <div className="col s12 m6">
              <div className="card blue-grey darken-3 z-depth-0">
                <div className="card-content">
                  <span className="card-title amber-text">Add Profile</span>
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
                        <i className="material-icons amber-text">person_add</i>
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
