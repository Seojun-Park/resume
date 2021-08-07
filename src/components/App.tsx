import React from 'react';
import Routes from './Routes'
import { GlobalStyle, theme } from '../styles'
// import { HashRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components';
import { Helmet } from 'react-helmet';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href={`https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap`} rel="stylesheet" />
      </Helmet>
      <GlobalStyle />
      {/* <Router> */}
      <Routes />
      {/* </Router> */}
    </ThemeProvider>
  )
}

export default App;
