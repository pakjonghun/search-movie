import React, { FC } from 'react';
import { joinClass } from '@utils/styleUtil';

interface props {
  title: string;
  canBack: boolean;
}

const Navigation: FC<props> = ({ title, canBack }) => {
  return (
    <nav
      className={joinClass('sticky top-0 grid p-3 bg-gray-800 text-gray-50 shadow-md', canBack ? 'grid-cols-3' : '')}
    >
      {canBack && <button className="w-fit scale-md">&larr; back</button>}
      <h1 className="text-center font-medium first-letter:uppercase">{title}</h1>
    </nav>
  );
};

export default Navigation;
