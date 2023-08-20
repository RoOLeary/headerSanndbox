import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import ThirdLevel from './ThirdLevel';

interface SubmenuProps {
  isVisible: boolean;
}

export interface SubmenuRef {
  toggleSubmenu: () => void;
}

const Submenu: React.ForwardRefRenderFunction<SubmenuRef, SubmenuProps> = (
  { isVisible },
  ref
) => {
    const [isOpen, setIsOpen] = useState(isVisible);
    const thirdLevelRef = useRef(null);
    const [isSL3MenuVisible, setIsL3MenuVisible] = useState(false);

  useImperativeHandle(ref, () => ({
    toggleSubmenu: () => setIsOpen((prevIsL3Visible) => !prevIsL3Visible),
  }));

  const handleSubToggleClick = () => {
    setIsOpen((prevIsL3Visible) => !prevIsL3Visible);
  };

  const toggleThirdLevel = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (thirdLevelRef.current) {
        // @ts-ignore
        thirdLevelRef.current.toggleThirdLevel(); // Access the ref method directly
    }
  setIsL3MenuVisible(!isSL3MenuVisible);
};

return (
    <div className={`submenu-inner${isOpen ? ' open' : ''}`}>
      <div className='flex flex-col'>
        <a onClick={handleSubToggleClick} className={'hover:text-black cursor-pointer'}>back</a>
        <div className="submenu-container">
            <nav>
                <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300"
                >SubMenu Item</a>
                <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300"
                >SubMenu Item</a>
                <a
                  className="text-gray-200 hover:text-black transition ease transform duration-300"
                  onClick={toggleThirdLevel}
                  id={'Ronan you absolute thick fuck'}
                  role="button"
                  tabIndex={0}
                >
                  Child Menu
                </a>
                <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300"
                >SubMenu Item</a>
            </nav>
            <ThirdLevel ref={thirdLevelRef} isVisible={isSL3MenuVisible} />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Submenu);
