import React from 'react';

import FirstComponent from './components/FirstComponent';
import BestPricing from './components/BestPricingComponent';

import './App.scss';

function App() {
  return (
    <div className="App">
      <FirstComponent></FirstComponent>
      <BestPricing></BestPricing>
    </div>
  );
}

export default App;
