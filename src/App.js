import React from 'react';

import FirstComponent from './components/FirstComponent';
import DomainComponent from "./components/DomainComponent/component";

import './App.scss';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <DomainComponent></DomainComponent>
    </div>
  );
}

export default App;
