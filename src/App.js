import React from 'react';

import FirstComponent from './components/FirstComponent';
import DomainComponent from "./components/DomainComponent/component";

import FunFactsComponent from './components/FunFactsComponent';

import './App.scss';
import ChooseUsComponent from './components/ChooseUsComponent';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>

      <DomainComponent></DomainComponent>

      <FunFactsComponent></FunFactsComponent>

      <ChooseUsComponent/>
    </div>
  );


}

export default App;
