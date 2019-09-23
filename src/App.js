import React from 'react';

import FirstComponent from './components/FirstComponent';
import BestPricing from './components/BestPricingComponent';
import DomainComponent from './components/DomainComponent/component';
import FunFactsComponent from './components/FunFactsComponent';
import ChooseUsComponent from './components/ChooseUsComponent';

import './App.scss';

function App() {
  return (
    <div className="App">
      <FirstComponent />
      <BestPricing />
      <DomainComponent />
      <ChooseUsComponent />
      <FunFactsComponent />
    </div>
  );
}

export default App;
