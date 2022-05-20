import React from 'react';
import Header from '@components/Header';
import Navigation from '@components/Navigation';
import { useLocation } from 'react-router-dom';
import { movieMenus, tvMenus } from './mainLayout.constants';
import Title from '@components/Title';
import SearchInput from '@components/Search/SearchInput';
import Filter from '@components/Search/Filter';

interface props {
  title: string;
  canBack?: boolean;
  children: React.ReactNode;
}

const MainLayout: React.FC<props> = ({ title, canBack = false, children }) => {
  const { pathname } = useLocation();

  return (
    <section className=" h-screen max-w-screen-lg mx-auto space-y-4">
      <Header title={title} canBack={canBack} />
      <Title title={title} />
      {pathname.includes('tvs') && <Navigation menus={tvMenus} />}
      {pathname.includes('movies') && <Navigation menus={movieMenus} />}
      <main className="px-5 py-3 space-y-5">
        <div className="relative max-w-lg mx-auto">
          <SearchInput />
          <Filter />
        </div>
        {children}
      </main>
    </section>
  );
};

export default MainLayout;
