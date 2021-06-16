import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../menu.svg';
import MenuItem from '../types/menuItems';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  logo: JSX.Element;
  menuItems: MenuItem[];
}

export default function Navbar(props: NavbarProps) {
  const { logo, menuItems } = props;

  return (
    <>
      <div className="px-8 py-4 bg-purple-dark items-center shadow md:px-40 flex justify-between bg-green-500">
        {logo}
        <button
          type="button"
          onClick={() => { alert('clicked'); }}
        >
          <img className="w-6" src={menuIcon} alt="menu icon" />
        </button>
      </div>
      <MobileMenu
        menuItems={menuItems}
      />
    </>
  );
}
