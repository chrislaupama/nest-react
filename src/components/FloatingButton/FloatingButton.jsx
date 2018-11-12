import React from 'react'
import M from 'materialize-css'

export default class FloatingButton extends React.Component {
  componentDidMount() {
    const elems = document.querySelectorAll('.fixed-action-btn')
    M.FloatingActionButton.init(elems, {
      direction: 'left',
      hoverEnabled: false
    })
  }
  render() {
    return (
      <div className="fixed-action-btn">
        <a href="/#" className="btn-floating btn-large amber">
          <i className="large material-icons blue-grey-text text-darken-4">
            add
          </i>
        </a>
        <ul>
          <li>
            <a href="/#" className="btn-floating yellow darken-1">
              <i className="material-icons">perm_contact_calendar</i>
            </a>
          </li>
          <li>
            <a href="/#" className="btn-floating green">
              <i className="material-icons">add</i>
            </a>
          </li>
          <li>
            <a href="/#" className="btn-floating blue">
              <i className="material-icons">edit</i>
            </a>
          </li>
          <li>
            <a href="/#" className="btn-floating red">
              <i className="material-icons">close</i>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

// document.addEventListener('DOMContentLoaded', function() {
//     var elems = document.querySelectorAll('.fixed-action-btn')
//     M.FloatingActionButton.init(elems, {
//       direction: 'left',
//       hoverEnabled: false
//     })
//   })
