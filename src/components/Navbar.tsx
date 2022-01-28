import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AlertContext from '../contexts/alert-context';
import MenuIcon from '../icons/MenuIcon';
import { MenuItem } from '../utils/MenuItems';
import AlertPopover from './AlertPopover';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  logo: JSX.Element;
  menuItems: MenuItem[];
}

export default function Navbar(props: NavbarProps): JSX.Element {
  const { logo, menuItems } = props;
  const { alert, setAlert } = useContext(AlertContext);

  const [isShowingMobileMenu, setIsShowingMobileMenu] = useState(false);

  const menuLinks = menuItems.map((menuItem: MenuItem) => (
    <li key={menuItem.displayText.split(' ').join()}>
      <Link
        className="text-white hover:text-purple-light transition-colors duration-500 font-sansBold text-lg flex flex-row items-center"
        to={menuItem.path}
      >
        {/* <div className="text-purple-light mx-4">{menuItem.icon}</div> */}
        {menuItem.displayText}
      </Link>
    </li>
  ));

  return (
    <div className="fixed w-full pointer-events-none">
      <div className="px-8 py-4 bg-purple-dark items-center shadow md:px-12 flex justify-between bg-green-500 pointer-events-auto">
        {logo}
        <ul className="hidden lg:flex lg:flex-row space-x-6">
          {menuLinks}
        </ul>
        <button
          className="lg:hidden"
          type="button"
          onClick={() => { setIsShowingMobileMenu(!isShowingMobileMenu); }}
        >
          <MenuIcon className={`w-6 transition-colors duration-500 ${isShowingMobileMenu ? 'text-white' : 'text-purple-light'}`} />
        </button>
      </div>
      { alert && <AlertPopover alert={alert} setAlert={setAlert} /> }
      <MobileMenu
        isVisible={isShowingMobileMenu}
        menuItems={menuItems}
        setIsVisible={setIsShowingMobileMenu}
      />
    </div>
  );
}
