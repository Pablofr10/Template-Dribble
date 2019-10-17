import React from 'react';
import GlobalStyle from './components/global';

import Routes from './rotas';
import Topbar from './components/Topo';

function App() {
  return (
    <div className="App">
      <GlobalStyle/>
      <Topbar/>
      <Routes/>
    </div>
  );
}

export default App;
