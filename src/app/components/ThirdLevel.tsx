import React, { useState, forwardRef, useImperativeHandle } from 'react';

interface ThirdLevelProps {
  isVisible: boolean;
  smenu?: any;
}

export interface ThirdLevelRef {
  toggleThirdLevel: () => void;
}

const ThirdLevel: React.ForwardRefRenderFunction<ThirdLevelRef, ThirdLevelProps> = (
  { isVisible, smenu },
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
        <a onClick={(e) => handleThirdToggleClick(e)} className={'hover:text-black cursor-pointer text-sm mb-4'}>back</a>
        
        <div className="submenu-container">
            <nav>
              {smenu.map((s: any, i: React.Key | null | undefined) => {
                return <a href={s.link} key={i} className="text-gray-200 hover:text-black transition ease transform duration-300">{s.linkTitle}</a>
              })}
            </nav>
        </div>
      
      </div>
    </div>
  );
};

export default forwardRef(ThirdLevel);
