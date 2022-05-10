import React, { FC, ReactElement, useEffect } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { RecoilRoot, RecoilState, useRecoilValue } from 'recoil';
import {
  genreState,
  isFilterOpenState,
  isTvOnState,
  popularityState,
} from '@recoil/atoms/filterAtom';

interface props {
  children: React.ReactNode;
}

type RcoilObserverArgs = {
  node: RecoilState<any>;
  onChange: jest.Mock<any, any>;
};

const RecoilObserver = ({ node, onChange }: RcoilObserverArgs) => {
  const value = useRecoilValue(node);
  useEffect(() => onChange(value), [onChange, value]);
  return null;
};

const AllProvider: FC<props> = ({ children }) => {
  const onChange = jest.fn();
  return (
    <RecoilRoot>
      <RecoilObserver node={isFilterOpenState} onChange={onChange} />
      <RecoilObserver node={isTvOnState} onChange={onChange} />
      <RecoilObserver node={genreState} onChange={onChange} />
      <RecoilObserver node={popularityState} onChange={onChange} />
      {children}
    </RecoilRoot>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };
