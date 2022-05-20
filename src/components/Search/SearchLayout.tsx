import React, { FC } from 'react';

interface props {
  children: React.ReactNode;
}

const SearchLayout: FC<props> = ({ children }) => {
  return <div className="relative w-96 mx-auto sm:w-[30rem] rounded-b-sm shadow-md">{children}</div>;
};

export default SearchLayout;
