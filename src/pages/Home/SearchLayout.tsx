import React, { FC } from 'react';

interface props {
  children: React.ReactNode;
}

const SearchLayout: FC<props> = ({ children }) => {
  return <div className="w-96 mx-auto sm:w-[30rem]">{children}</div>;
};

export default SearchLayout;
