import React from 'react';
import { Link } from 'react-router-dom';
import { MenuItem } from '../utils/MenuItems';

interface MobileMenuProps {
  isVisible: boolean;
  menuItems: MenuItem[];
  setIsVisible: (isVisible: boolean) => void;
}

export default function MobileMenu(props: MobileMenuProps): JSX.Element {
  const { isVisible, menuItems, setIsVisible } = props;

  const menuElements = menuItems.map((menuItem: MenuItem) => (
    <li key={menuItem.displayText.split(' ').join()}>
      <Link
        onClick={() => setIsVisible(!isVisible)}
        className="text-white font-sansBold text-xl flex flex-row items-center"
        to={menuItem.path}
      >
        <div className="text-purple-light mx-4">{menuItem.icon}</div>
        <p className="whitespace-nowrap">{menuItem.displayText}</p>
      </Link>
    </li>
  ));

  return (
    <div
      className={`bg-black transition-colors duration-500 ${
        isVisible ? 'bg-opacity-75' : 'bg-opacity-0'
      }`}
    >
      <div
        className={`bg-purple-darker transition-all duration-500 ${
          isVisible ? 'ml-0' : 'ml-full'
        } border-l-8 border-purple-light h-screen pointer-events-auto`}
      >
        <ul className="py-6 space-y-6">{menuElements}</ul>
      </div>
    </div>
  );
}
