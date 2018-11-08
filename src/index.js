import React from 'react'
import ReactDOM from 'react-dom'
import Index from './components/App'

// import Header from './components/Header'
// import Main from './components/Main'
// import Footer from './components/Footer'

function App() {
  return (
    <div className="container">
      <Index />
    </div>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
