import './App.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Journal from './components/Journal';
import Navbar from './components/Navbar';
import JournalEntry from './components/JournalEntry';

function App() {
  return (
    <div className="App">
      <Navbar
        rightChildren={(
          <div className="space-x-3">
            <Link to="/">Home</Link>
            <Link to="/journal">Journal</Link>
          </div>
        )}
      />
      <Switch>
        <Route path="/journal/entries/:date/:title">
          <JournalEntry />
        </Route>
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
