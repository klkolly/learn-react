import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';

const HatsPage = () => (
  <div>
    <h1>hatpage</h1>
  </div>
)

function App() {
  return (
    <div >
      <Route exact path = '/' component={Homepage}  />
      <Route path = '/hats' component={HatsPage}  />
    </div>
  );
}

export default App;
