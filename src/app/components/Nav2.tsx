"use client";
import { useState } from 'react';
import Link from 'next/link';

interface NavItem {
  label: string;
  link: string;
  subItems?: NavItem[];
}

interface NavbarProps {
  menuItems: NavItem[];
}

export const Navbar: React.FC<NavbarProps> = ({ }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openSubmenus, setOpenSubmenus] = useState<number[]>([]);
  
    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
      setOpenSubmenus([]); // Close all submenus when toggling mobile menu
    };
  
    const toggleSubmenu = (index: number) => {
      if (openSubmenus.includes(index)) {
        setOpenSubmenus(openSubmenus.filter((i) => i !== index));
      } else {
        setOpenSubmenus([...openSubmenus, index]);
      }
    };

    const menuItems = [
        { label: 'Home', link: '/' },
        {
          label: 'Services',
          link: '/services',
          subItems: [
            { label: 'Service 1', link: '/service1' },
            { label: 'Service 2', link: '/service2' },
          ],
        },
        { label: 'About', link: '/about' },
        { label: 'Contact', link: '/contact' },
      ];


  return (
    <section
      id="nav"
      className={mobileMenuOpen ? 'menu--active' : 'menu--default'}
    >
    <nav className="bg-gray-800">
      {/* ... (rest of the component remains the same) */}
      <div className={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {menuItems.map((item, index) => (
            <div key={item.label} className="relative group">
              <a
                onClick={() => {
                  if (item.subItems) {
                    toggleSubmenu(index);
                  } else {
                    toggleMobileMenu();
                  }
                }}
                className="block text-white hover:text-gray-300"
              >
                {item.label}
              </a>
              {item.subItems && openSubmenus.includes(index) && (
                <ul className="absolute mt-2 space-y-2">
                  {item.subItems.map((subItem) => (
                    <li key={subItem.label}>
                      <Link href={subItem.link}
                          onClick={toggleMobileMenu}
                          className="block text-gray-300 hover:text-white"
                        >
                          {subItem.label}
                        
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
    </section>
  );
};

export default Navbar;
