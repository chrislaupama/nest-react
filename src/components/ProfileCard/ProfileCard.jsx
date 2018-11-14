import React from 'react'

export default class ProfileCard extends React.Component {
  render() {
    return (
      <div className="col s12 m6">
        <div className="card blue-grey darken-2 z-depth-4">
          <div className="card-content white-text">
            <span className="card-title amber-text">Bella</span>
            <p>
              This section will contain the current schedule for this child,
              including the name of the adult who has that child on that day.
            </p>
          </div>
          <div className="card-action">
            <Link to="/app/profile">
              <a href="/#/">
                <i className="material-icons amber-text">calendar_today</i>
              </a>
            </Link>
            <Link to="/add">
              <a href="/#/">
                <i className="material-icons amber-text">add</i>
              </a>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
