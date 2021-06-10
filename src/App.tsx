import './App.css';
import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Journal from './components/Journal';
import Navbar from './components/Navbar';
import JournalEntry from './components/JournalEntry';

function App() {
  return (
    <div className="bg-purple-dark min-h-screen font-sans">
      <Navbar
        leftChildren={(
          <div className="w-full flex items-center justify-center">
            <img className="w-3/12" src="logo3.png" alt="logo" />
            <h1 className="w-7/12 font-mono text-purple-light text-xl font-bold text-center">Don&apos;t panic()</h1>
          </div>
        )}
        rightChildren={(
          <div className="space-x-3 hidden sm:block">
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
