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
      <header className="flex items-center justify-between">
        <h1>
          <a href="/" className='font-black tracking-tighter'>LOGO</a>
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
              className={`h-1.5 w-full my-1 rounded-full bg-black transition ease transform duration-300 ${
                isMobileMenuOpen
                  ? 'rotate-45 translate-y-3.5'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            ></div>
            <div
              className={`h-1.5 w-full my-1 rounded-full bg-black transition ease transform duration-300 ${
                isMobileMenuOpen
                  ? 'opacity-0'
                  : 'opacity-50 group-hover:opacity-100'
              }`}
            ></div>
            <div
              className={`h-1.5 w-full my-1 rounded-full bg-black transition ease transform duration-300 ${
                isMobileMenuOpen
                  ? '-rotate-45 -translate-y-3.5 opacity-50 group-hover:opacity-100'
                  : ''
              }`}
            ></div>
          </div>
        </span>
        
        <div className="menu">
          <div className="menu-inner">
            <nav>
              <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300">
                Work
              </a>
              <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300">
                Info
              </a>
              <a className="text-gray-200 hover:text-black transition ease transform duration-300"
                onClick={(e) => toggleSubMenu(e)}
                id={'notes'}
                role="button"
                tabIndex={0}
              >
                Notes
                {isSubMenuVisible && (
                <div className="max-sm:hidden absolute left-0 mt-2 transform transition duration-300 ease-in-out group-hover:translate-x-0 translate-x-full bg-gray-700 py-2 px-3 rounded-md shadow-lg">
                  {/* Submenu content */}
                  <nav>
                    <ul>
                      <li><a href="">Submenu Item</a></li>
                      <li><a href="">Submenu Item</a></li>
                      <li><a href="">Child Menu</a>
                        <ul>
                          <li><a href="#">Ass</a></li>
                        </ul>
                      </li>
                      <li><a href="">Child Menu</a>
                        <ul>
                          <li><a href="#">Ass</a></li>
                        </ul>
                      </li>
                    </ul>
                  </nav>
                </div>
                )}
              </a>
              <div className="md:hidden">
                <Submenu ref={submenuRef} isVisible={isSubMenuVisible} />
              </div>
            </nav>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Navbar;
