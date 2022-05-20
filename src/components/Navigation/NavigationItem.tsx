import { joinClass } from '@utils/styleUtil';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu } from './navigation.type';

const NavigationItem: React.FC<Menu> = ({ name, path }) => {
  const { pathname } = useLocation();

  return (
    <Link
      className={joinClass(
        'py-2 px-3 bg-gray-200 text-sm font-medium text-gray-800 sacle-md rounded-md shadow-md',
        pathname.includes(path) ? 'bg-gray-500 text-gray-50' : '',
      )}
      to={path}
    >
      {name}
    </Link>
  );
};

export default NavigationItem;