import React from 'react';

import FirstComponent from './components/FirstComponent';

import FunFactsComponent from './components/FunFactsComponent';

import './App.scss';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
    </div>
    <div className="App">
      <FunFactsComponent></FunFactsComponent>
    </div>
  );


}

export default App;
