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
import MenuItem from './types/menuItems';
import HouseIcon from './icons/HouseIcon';
import FileEarmarkPersonIcon from './icons/FileEarmarkPersonIcon';
import KanbanIcon from './icons/KanbanIcon';
import BlockquoteRightIcon from './icons/BlockquoteRightIcon';
import JournalsIcon from './icons/JournalsIcon';
import BookmarkIcon from './icons/BookmarkIcon';

function App(): JSX.Element {
  const menuItems: MenuItem[] = [
    {
      path: '/',
      displayText: 'Home',
      icon: <HouseIcon />,
    },
    {
      path: '/resume',
      displayText: 'Resume',
      icon: <FileEarmarkPersonIcon />,
    },
    {
      path: '/projects',
      displayText: 'Projects',
      icon: <KanbanIcon />,
    },
    {
      path: '/blog',
      displayText: 'Blog',
      icon: <BlockquoteRightIcon />,
    },
    {
      path: '/journal',
      displayText: 'Dev Journal',
      icon: <JournalsIcon />,
    },
    {
      path: '/reads',
      displayText: 'Reads',
      icon: <BookmarkIcon />,
    },
  ];

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
