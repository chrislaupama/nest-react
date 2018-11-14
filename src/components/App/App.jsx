import React from 'react'
import ProfileCard from '../ProfileCard/ProfileCard'
import AddChild from '../AddChild/AddChild'
import Modal from 'react-modal'
import './app.css'

Modal.setAppElement('#root')

export default class Main extends React.Component {
  state = {
    showModal: false,
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

  addChild = child => {
    // Give the new child an id which is +1 higher than the last child's id
    child.id = this.state.children.length + 1
    // Get copy of the full current state by using ..., then add the new child object by adding a comma then the child argument to add the new child object
    let children = [...this.state.children, child]
    // Now we add the new children array with the current children and the new child to the state
    this.setState({
      children: children
    })
  }

  handleOpenModal = () => {
    this.setState({ showModal: true })
  }

  handleCloseModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    return (
      <div className="section">
        <div className="row">
          <div className="center">
            <button
              className="btn-floating btn-large waves-effect amber"
              onClick={this.handleOpenModal}
            >
              <i className="material-icons blue-grey-text text-darken-4">add</i>
            </button>
          </div>
        </div>
        <div className="row">
          {this.state.children.map(child => {
            return <ProfileCard firstName={child.firstName} key={child.id} />
          })}
          <Modal
            isOpen={this.state.showModal}
            onRequestClose={this.handleCloseModal}
            className="Modal"
            overlayClassName="Overlay"
          >
            <AddChild addChild={this.addChild} />
            <button
              className="left btn-floating waves-effect orange darken-4"
              onClick={this.handleCloseModal}
            >
              <i className="material-icons blue-grey-text text-darken-4">
                close
              </i>
            </button>
          </Modal>
        </div>
      </div>
    )
  }
}
