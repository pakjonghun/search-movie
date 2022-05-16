import React, { FC, useCallback } from 'react';
import { joinClass } from '@utils/styleUtil';
import { useNavigate } from 'react-router-dom';

interface props {
  title: string;
  canBack: boolean;
}

const Navigation: FC<props> = ({ title, canBack }) => {
  const navigate = useNavigate();

  const onBackClick = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <nav className={joinClass('sticky top-0 grid p-3 text-gray-50', canBack ? 'grid-cols-3' : '')}>
      {canBack && (
        <button onClick={onBackClick} className="w-fit md:text-xl scale-md">
          &larr; back
        </button>
      )}
      <h1 className="text-center text-xl md:text-3xl font-medium first-letter:uppercase">{title}</h1>
    </nav>
  );
};

export default Navigation;
