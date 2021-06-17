import React, { ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '../icons/MenuIcon';
import menuIcon from '../icons/menu.svg';
import MenuItem from '../types/menuItems';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  logo: JSX.Element;
  menuItems: MenuItem[];
}

export default function Navbar(props: NavbarProps) {
  const { logo, menuItems } = props;

  const [isShowingMobileMenu, setIsShowingMobileMenu] = useState(false);

  return (
    <div className="fixed w-full">
      <div className="px-8 py-4 bg-purple-dark items-center shadow md:px-40 flex justify-between bg-green-500">
        {logo}
        <button
          type="button"
          onClick={() => { setIsShowingMobileMenu(!isShowingMobileMenu); }}
        >
          <MenuIcon className={`w-6 transition-colors duration-1000 ${isShowingMobileMenu ? 'text-white' : 'text-purple-light'}`} />
        </button>
      </div>
      <MobileMenu
        isVisible={isShowingMobileMenu}
        menuItems={menuItems}
      />
    </div>
  );
}
