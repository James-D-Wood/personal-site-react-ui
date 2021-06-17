import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Journal from './components/Journal';
import Navbar from './components/Navbar';
import JournalEntry from './components/JournalEntry';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Projects from './components/Projects';
import menuItems from './utils/MenuItems';
import Reads from './components/Reads';

function App(): JSX.Element {
  return (
    <div className="bg-purple-darker min-h-screen font-sans">
      <Navbar
        logo={(
          <p className="text-white text-md font-mono font-bold text-xxl">
            {'{jw}'}
          </p>
        )}
        menuItems={menuItems}
      />
      <Switch>
        <Route path="/reads">
          <Reads />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/journal/entries/:date/:title">
          <JournalEntry />
        </Route>
        <Route path="/journal">
          <Journal />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
