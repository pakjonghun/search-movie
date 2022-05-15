import React, { FC, ReactElement, Suspense, useEffect } from 'react';
import { act, render, RenderOptions } from '@testing-library/react';
import { RecoilRoot, RecoilState, useRecoilValue } from 'recoil';
import {
  progressStyleState,
  genresQuery,
  progressWidthState,
  progressBarStyleState,
  checkIsSelectedPopularityState,
  calculatePopularityState,
} from '@recoil/filter/filter.selector';

import {
  isFilterOpenState,
  filterContentState,
  selectedGenreIdsState,
  genresState,
  popularityState,
} from '@recoil/filter/filter.atom';

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

const states = [isFilterOpenState, filterContentState, selectedGenreIdsState, genresState, popularityState];

const AllProvider: FC<props> = ({ children }) => {
  const onChange = jest.fn();
  return (
    <RecoilRoot>
      <Suspense fallback={<div>Loading</div>}>
        {states.map((state, index) => (
          <RecoilObserver key={index} node={state} onChange={onChange} />
        ))}

        {children}
      </Suspense>
    </RecoilRoot>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllProvider, ...options });

export * from '@testing-library/react';
export { customRender as render };

export function flushPromisesAndTimers(): Promise<void> {
  return act(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, 100);
        jest.runAllTimers();
      }),
  );
}
