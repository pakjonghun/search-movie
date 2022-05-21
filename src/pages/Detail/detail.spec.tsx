import React, { useEffect } from 'react';
import { movieVideoQuery } from '@recoil/movie/movie.selector';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Detail from '.';
import { HelmetProvider } from 'react-helmet-async';
import { mockVideo } from './mock/mockData';

function flushPromisesAndTimers(): Promise<void> {
  return act(
    () =>
      new Promise((resolve) => {
        setTimeout(resolve, 100);
        jest.runAllTimers();
      }),
  );
}

const Observer = ({ onChange }: { onChange: any }) => {
  const videoKeys = useRecoilValue(movieVideoQuery(1));
  useEffect(() => {
    onChange(videoKeys);
  }, [onChange, videoKeys]);
  return null;
};

jest.mock('react-router-dom', () => {
  const realModule = jest.requireActual('react-router-dom');

  return {
    ...realModule,
    useParams: () => ({ id: 1 }),
    useLocation: () => ({ state: { contentOverview: 'overview', contentTitle: 'title' } }),
  };
});

jest.mock('uuid', () => {
  const realModule = jest.requireActual('uuid');
  return {
    ...realModule,
    v4: () => Math.random().toString(36).substring(12, 36),
  };
});

//@ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockVideo),
  }),
);

describe('detail test', () => {
  it('should render mock data', async () => {
    render(
      <RecoilRoot>
        <HelmetProvider>
          <BrowserRouter>
            <React.Suspense fallback={<div>Loading</div>}>
              <Observer onChange={() => jest.fn()} />
              <Detail />
            </React.Suspense>
          </BrowserRouter>
        </HelmetProvider>
      </RecoilRoot>,
    );

    await flushPromisesAndTimers();

    screen.getByRole('button', { name: /back/, exact: false });

    screen.getByText('overview');
    screen.getByText('title');
    const videos = screen.getAllByRole('document');
    expect(videos.length).toBe(2);
  });
});

afterAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});
