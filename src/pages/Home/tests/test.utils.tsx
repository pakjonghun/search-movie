import React, { FC, ReactElement } from 'react';
import HomeContextProvider from '@contexts/home';
import { render, RenderOptions } from '@testing-library/react';

interface props {
  children: React.ReactNode;
}

const AllProvider: FC<props> = ({ children }) => {
  return <HomeContextProvider>{children}</HomeContextProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
