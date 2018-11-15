import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './components/Routes'

export default class App extends React.Component {
  render() {
    return <Routes />
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
