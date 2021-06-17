import React from 'react';
import BlockquoteRightIcon from '../icons/BlockquoteRightIcon';
import BookmarkIcon from '../icons/BookmarkIcon';
import FileEarmarkPersonIcon from '../icons/FileEarmarkPersonIcon';
import HouseIcon from '../icons/HouseIcon';
import JournalsIcon from '../icons/JournalsIcon';
import KanbanIcon from '../icons/KanbanIcon';

export interface MenuItem {
  path: string;
  displayText: string;
  icon: JSX.Element;
}

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

export default menuItems;
