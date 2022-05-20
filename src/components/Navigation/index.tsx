import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu } from './navigation.type';
import NavigationItem from './NavigationItem';

interface props {
  menus: Menu[];
}

const Navigation: React.FC<props> = ({ menus }) => {
  const { pathname } = useLocation();
  const path = pathname.split('/')[1];
  const navigation = useNavigate();

  return (
    <nav>
      <h1
        onClick={() => navigation(`/${path == 'tvs' ? 'movies' : 'tvs'}/popular`)}
        className="w-fit mb-5 font-bold text-lg scale-md cursor-pointer"
      >
        {path.toUpperCase()} ▶︎
      </h1>
      <div className="flex space-x-3">
        {menus.map(({ name, path }) => (
          <NavigationItem key={path} path={path} name={name} />
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
