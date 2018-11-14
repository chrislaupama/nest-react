import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/Index'

function App() {
  return (
    <div className="container">
      <Index />
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
