import React from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../types/menuItems';

interface MobileMenuProps {
  menuItems: MenuItem[];
}

export default function MobileMenu(props: MobileMenuProps) {
  const { menuItems } = props;

  const menuElements = menuItems.map((menuItem: MenuItem) => (
    <li key={menuItem.displayText.split(' ').join()}>
      <Link className="text-white font-sansBold text-xl flex flex-row items-center" to={menuItem.path}>
        <div className="text-purple-light mx-4">{menuItem.icon}</div>
        <p>{menuItem.displayText}</p>
      </Link>
    </li>
  ));

  return (
    <div className="bg-black bg-opacity-10">
      <div className="bg-purple-darker shadow-2xl ml-12 border-l-8 border-purple-light h-screen">
        <ul className="py-6 space-y-6">
          {menuElements}
        </ul>
      </div>
    </div>
  );
}
