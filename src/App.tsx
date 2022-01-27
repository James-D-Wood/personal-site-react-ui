import './App.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Notebook from './components/Notebook';
import Navbar from './components/Navbar';
import NotebookEntry from './components/NotebookEntry';
import Blog from './components/Blog';
import Resume from './components/Resume';
import Projects from './components/Projects';
import menuItems from './utils/MenuItems';
import Reads from './components/Reads';
import ValueSort from './components/valueSort/ValueSort';

function App(): JSX.Element {
  return (
    <div className="bg-purple-darker min-h-screen font-sans">
      <Navbar
        logo={(
          <p className="text-white text-md font-mono font-bold text-3xl">
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
        <Route path="/notebook/:title">
          <NotebookEntry />
        </Route>
        <Route path="/notebook">
          <Notebook />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/value-sort/:boardName">
          <ValueSort />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
