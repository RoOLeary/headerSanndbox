"use client";
import React, { useRef, useState } from 'react';
import './../globals.css';
import Submenu from './SubMenu';

export const Navbar = () => {
  const submenuRef = useRef(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSubMenuVisible, setIsSubMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (submenuRef.current) {
      // @ts-expect-error
      submenuRef.current.toggleSubmenu(); // Access the ref method directly
    }
    setIsSubMenuVisible(!isSubMenuVisible);
  };

  return (
    <section
      id="nav"
      className={isMobileMenuOpen ? 'menu--active' : 'menu--default'}
    >
      <header className="flex items-center justify-between bg-black">
        <h1>
          <a href="/" className='font-black tracking-tighter text-white'>BUSY<span className={"text-red-600"}>LITTLE</span>PIXELS</a>
        </h1>
        {/* Hamburger */}
        <span
          className="block md:hidden"
          onClick={toggleMobileMenu}
          role="button"
          tabIndex={0}
        >
          <div className="flex flex-col h-auto w-10 rounded justify-center items-center group">
            <div
              className={`h-1.5 w-full my-1 rounded-full bg-red-600 transition ease transform duration-300 ${
                isMobileMenuOpen
                  ? 'rotate-45 translate-y-3.5'
                  : 'group-hover:opacity-100'
              }`}
            ></div>
            <div
              className={`h-1.5 w-full my-1 rounded-full bg-red-600 transition ease transform duration-300 ${
                isMobileMenuOpen
                  ? 'opacity-0'
                  : 'group-hover:opacity-100'
              }`}
            ></div>
            <div
              className={`h-1.5 w-full my-1 rounded-full bg-red-600 transition ease transform duration-300 ${
                isMobileMenuOpen
                  ? '-rotate-45 -translate-y-3.5'
                  : 'group-hover:opacity-100'
              }`}
            ></div>
          </div>
        </span>
        
        <div className="menu">
          <div className="menu-inner">
            <nav>
              <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300">
                About
              </a>
              
              <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300">
                What we do
              </a>
              <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
