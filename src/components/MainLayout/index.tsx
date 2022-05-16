import React, { FC } from 'react';
import Navigation from './Navigation';

interface props {
  title: string;
  canBack?: boolean;
  children: React.ReactNode;
}

const MainLayout: FC<props> = ({ title, canBack = false, children }) => {
  return (
    <section className="bg-slate-800 text-gray-50 h-screen max-w-screen-lg mx-auto">
      <header>
        <Navigation title={title} canBack={canBack} />
      </header>
      <main className="px-5 py-3 space-y-5">{children}</main>
    </section>
  );
};

export default MainLayout;
