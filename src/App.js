import React from 'react';
import ReactGA from 'react-ga';
import Routes from './routes';

import GlobalStyle from './styles/global';

ReactGA.initialize('UA-105168101-1');
ReactGA.pageview('/');

function App() {
  return (
    <>
      <Routes />
      <GlobalStyle />
    </>
  );
}

export default App;
