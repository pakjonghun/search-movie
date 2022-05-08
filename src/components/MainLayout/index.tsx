import React, { FC } from 'react';
import Navigation from './Navigation';
import SearchInput from '../../pages/Home/SearchInput';

interface props {
  title: string;
  canBack?: boolean;
  children: React.ReactNode;
}

const MainLayout: FC<props> = ({ title, canBack = false, children }) => {
  return (
    <section className="max-w-screen-lg mx-auto">
      <header>
        <Navigation title={title} canBack={canBack} />
      </header>
      <main className="px-5 py-3">{children}</main>
    </section>
  );
};

export default MainLayout;
