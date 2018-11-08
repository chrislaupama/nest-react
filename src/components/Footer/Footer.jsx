import React from 'react'

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='page-footer blue-grey darken-4'>
        <div className='row'>
          <div className='col s12'>
            <div className='card-panel blue-grey darken-3'>
              <span className='grey-text text-lighten-1'>
                NEST is an application developed to help parents and caregivers
                keep the daily, weekly, monthly and annual scheduling of a
                child's activities easy.
              </span>
            </div>
          </div>
        </div>
        <div className='center footer-copyright'>
          <div className='container'>© 2018 Chris Laupama</div>
        </div>
      </footer>
    )
  }
}
