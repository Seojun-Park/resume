import React from 'react';
import Routes from './Routes'
import { HashRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App;
