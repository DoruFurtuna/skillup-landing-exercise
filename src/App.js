import React from 'react';

import FirstComponent from './components/FirstComponent';
import DomainComponent from "./components/DomainComponent/component";

import FunFactsComponent from './components/FunFactsComponent';

import './App.scss';

function App() {
  return (
    <div className="App">
       <FirstComponent></FirstComponent>  

      <DomainComponent></DomainComponent>

      <FunFactsComponent></FunFactsComponent>

    </div>
  );


}

export default App;
