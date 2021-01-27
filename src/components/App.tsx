import React from 'react';
import Routes from './Routes'
import { GlobalStyle, theme } from '../styles'
import { HashRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  )
}

export default App;
