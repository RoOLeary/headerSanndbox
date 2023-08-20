import React, { useState, forwardRef, useImperativeHandle } from 'react';

interface ThirdLevelProps {
  isVisible: boolean;
}

export interface ThirdLevelRef {
  toggleThirdLevel: () => void;
}

const ThirdLevel: React.ForwardRefRenderFunction<ThirdLevelRef, ThirdLevelProps> = (
  { isVisible },
  ref
) => {
  const [isl3Open, setIsl3Open] = useState(isVisible);

  useImperativeHandle(ref, () => ({
    toggleThirdLevel: () => setIsl3Open((prevIsl3Open) => !prevIsl3Open),
  }));

  const handleThirdToggleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); 
    setIsl3Open((prevIsl3Open) => !prevIsl3Open)
  };


  return (
    <div className={`level-three-inner${isl3Open ? ' open translate-y-0' : ''}`}>
      <div className='flex flex-col'>
        <a onClick={(e) => handleThirdToggleClick(e)} className={'hover:text-black cursor-pointer'}>back</a>
        <div className="submenu-container">
            <nav>
              <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300">Level 3 Item 2</a>
              <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300">Level 3 Item 2</a>
              <a href="#" className="text-gray-200 hover:text-black transition ease transform duration-300">Level 3 Item 2</a>
            </nav>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(ThirdLevel);
