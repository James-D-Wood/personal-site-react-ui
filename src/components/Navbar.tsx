import React, { useState } from 'react';
import MenuIcon from '../icons/MenuIcon';
import { MenuItem } from '../utils/MenuItems';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  logo: JSX.Element;
  menuItems: MenuItem[];
}

export default function Navbar(props: NavbarProps): JSX.Element {
  const { logo, menuItems } = props;

  const [isShowingMobileMenu, setIsShowingMobileMenu] = useState(false);

  return (
    <div className="fixed w-full pointer-events-none">
      <div className="px-8 py-4 bg-purple-dark items-center shadow md:px-12 flex justify-between bg-green-500 pointer-events-auto">
        {logo}
        <button
          type="button"
          onClick={() => { setIsShowingMobileMenu(!isShowingMobileMenu); }}
        >
          <MenuIcon className={`w-6 transition-colors duration-500 ${isShowingMobileMenu ? 'text-white' : 'text-purple-light'}`} />
        </button>
      </div>
      <MobileMenu
        isVisible={isShowingMobileMenu}
        menuItems={menuItems}
        setIsVisible={setIsShowingMobileMenu}
      />
    </div>
  );
}
