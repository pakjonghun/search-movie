import React from 'react';
import { Link } from 'react-router-dom';

const switchList = [
  { name: '인기영화', path: 'movies/popular' },
  { name: '곧 개봉영화', path: 'movies/upcoming' },
  { name: '인기드라마', path: 'tvs/popular' },
  { name: '방영드라마', path: 'tvs/onair' },
];

const PageSwitcher = () => {
  return (
    <ul>
      {switchList.map(({ name, path }) => (
        <li key={path}>
          <Link to={path}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default PageSwitcher;
