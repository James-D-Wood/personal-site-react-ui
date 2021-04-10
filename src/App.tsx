import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Journal from './components/Journal';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/journal">
          <Journal />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
