import React, { useEffect } from 'react';
import { filterContentState } from '@recoil/filter/filter.atom';
import { movieItemState, movieVideoQuery } from '@recoil/movie/movie.selector';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Detail from '.';

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
  const { overview, title } = useRecoilValue(movieItemState({ cursor: 1, index: 0 }));
  const selectedContent = useRecoilValue(filterContentState);
  useEffect(() => {
    onChange(videoKeys);
    onChange(overview);
    onChange(title);
    onChange(selectedContent);
  }, [onChange, videoKeys, selectedContent, overview, title]);
  return null;
};

jest.mock('react-router-dom', () => {
  const realModule = jest.requireActual('react-router-dom');

  return {
    ...realModule,
    useParams: () => ({ id: 1 }),
    useLocation: () => ({ state: { cursor: 1, index: 0 } }),
  };
});

jest.mock('uuid', () => {
  const realModule = jest.requireActual('uuid');
  return {
    ...realModule,
    v4: () => Math.random().toString(36).substring(12, 36),
  };
});

describe('detail test', () => {
  it('should', async () => {
    //@ts-ignore
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ results: [{ title: 'title', name: 'name', overview: 'overview' }] }),
      }),
    );

    render(
      <RecoilRoot>
        <BrowserRouter>
          <React.Suspense fallback={<div>Loading</div>}>
            <Observer onChange={() => jest.fn()} />
            <Detail />
          </React.Suspense>
        </BrowserRouter>
      </RecoilRoot>,
    );

    await flushPromisesAndTimers();

    screen.getByText('overview');
    screen.getByText('name');
    screen.getByText('No Video Information');
  });
});

afterAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});
