import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { flushPromisesAndTimers } from '@utils/testUtil';
import Loading from '@components/Loading';
import TV from '.';
import { BrowserRouter } from 'react-router-dom';
import { mockTVS, Observer } from './mock';
import { MockObserve } from './mock/intersectionOpserver';

//@ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockTVS),
  }),
);

jest.mock('uuid', () => ({
  v4: () => Math.random().toString(20).substring(2, 18),
}));

jest.doMock('intersection-observer', () => MockObserve, { virtual: true });
window.IntersectionObserver = jest.requireMock('intersection-observer');

it('movie test', async () => {
  render(
    <RecoilRoot>
      <BrowserRouter>
        <React.Suspense fallback={<Loading />}>
          <Observer onChange={jest.fn()} />
          <TV />
        </React.Suspense>
      </BrowserRouter>
    </RecoilRoot>,
  );

  await flushPromisesAndTimers();

  const scaleton = await screen.findByTestId('listitem');
  expect(scaleton).toHaveClass('bg-slate-50');
});

afterAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});
