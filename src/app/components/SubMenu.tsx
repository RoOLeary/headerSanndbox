import React, { useState, forwardRef, useImperativeHandle, useRef } from 'react';
import ThirdLevel from './ThirdLevel';

interface SubmenuProps {
  isVisible: boolean;
}

export interface SubmenuRef {
  toggleSubmenu: () => void;
}

export const sub1 = [
  {
    link: '#',
    linkTitle: 'Chonky',  
  },
  {
    link: '#',
    linkTitle: 'Bollocks',  
  },
  {
    link: '#',
    linkTitle: 'Dirty Hackz',  
  },
]
export const sub2 = [
  {
    link: '#',
    linkTitle: 'Hacky',  
  },
  {
    link: '#',
    linkTitle: 'Load of',  
  },
  {
    link: '#',
    linkTitle: 'Bollocks',  
  },
]



const Submenu: React.ForwardRefRenderFunction<SubmenuRef, SubmenuProps> = (
  { isVisible },
  ref
) => {
    const [isOpen, setIsOpen] = useState(isVisible);
    const thirdLevelRef = useRef(null);
    const [isSL3MenuVisible, setIsL3MenuVisible] = useState(false);
    const [inner, setInner] = useState();

  useImperativeHandle(ref, () => ({
    toggleSubmenu: () => setIsOpen((prevIsL3Visible) => !prevIsL3Visible),
  }));

  const handleSubToggleClick = () => {
    setIsOpen((prevIsL3Visible) => !prevIsL3Visible);
  };

  const toggleThirdLevel = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    
    if(e.currentTarget.id === '1'){
      // @ts-ignore
      setInner(sub1)
    } else {
      // @ts-ignore
      setInner(sub2)
    }
    if (thirdLevelRef.current) {
        // @ts-ignore
        thirdLevelRef.current.toggleThirdLevel(); // Access the ref method directly
    }
  setIsL3MenuVisible(!isSL3MenuVisible);
};

return (
    <div className={`submenu-inner${isOpen ? ' open' : ''}`}>
      <div className='flex flex-col'>
        <a onClick={handleSubToggleClick} className={'hover:text-black cursor-pointer text-sm mb-4'}>back</a>
        <div className="submenu-container">
            <nav>
                <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300"
                >SubMenu Item</a>
                <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300"
                >SubMenu Item</a>
                <a
                  className="text-gray-200 hover:text-black transition ease transform duration-300"
                  onClick={(e) => toggleThirdLevel(e)}
                  id="1"
                  role="button"
                  tabIndex={0}
                >
                  Child Menu
                </a>
                <a
                  className="text-gray-200 hover:text-black transition ease transform duration-300"
                  onClick={(e) => toggleThirdLevel(e)}
                  id="2"
                  role="button"
                  tabIndex={0}
                >Child Menu</a>
            </nav>
            <ThirdLevel ref={thirdLevelRef} isVisible={isSL3MenuVisible} smenu={inner ? inner : sub1} />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Submenu);
