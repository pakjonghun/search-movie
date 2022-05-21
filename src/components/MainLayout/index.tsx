import React from 'react';
import Header from '@components/MainLayout/Header';
import Navigation from '@components/Navigation';
import { useLocation, useParams } from 'react-router-dom';
import { movieMenus, tvMenus } from './mainLayout.constants';
import Title from '@components/MainLayout/Title';
import SearchInput from '@components/MainLayout/SearchInput';
import Filter from '@components/MainLayout/Filter';

interface props {
  title: string;
  canBack?: boolean;
  children: React.ReactNode;
}

const MainLayout: React.FC<props> = ({ title, canBack = false, children }) => {
  const { pathname } = useLocation();
  const { id } = useParams();

  return (
    <section className=" h-screen max-w-screen-lg mx-auto space-y-4">
      <Header title={title} canBack={canBack} />
      <Title title={title} />
      {!id && pathname.includes('tvs') && <Navigation menus={tvMenus} />}
      {!id && pathname.includes('movies') && <Navigation menus={movieMenus} />}
      <main className="px-5 py-3 space-y-5">
        {!id && (
          <div className="relative max-w-lg mx-auto">
            <SearchInput />
            <Filter />
          </div>
        )}
        {children}
      </main>
    </section>
  );
};

export default MainLayout;
