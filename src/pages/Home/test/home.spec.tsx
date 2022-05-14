import React, { useEffect } from 'react';
import Home from '@pages/Home';

import userEvent from '@testing-library/user-event';
import { Suspense } from 'react';
import { RecoilRoot, snapshot_UNSTABLE } from 'recoil';

import { flushPromisesAndTimers, render as render, screen } from './test.util';
import { findByRole } from '@testing-library/react';
import {
  checkIsSelectedPopularityState,
  progressBarStyleState,
  progressWidthState,
} from '@recoil/Filter/FilterSelector';
import { popularityState } from '@recoil/Filter/FilterAtom';

describe('Title Component', () => {
  const mockState = {
    genres: [
      { id: 1, name: 'name1' },
      { id: 2, name: 'name2' },
      { id: 3, name: 'name3' },
      { id: 4, name: 'name4' },
    ],
  };

  //@ts-ignore
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockState),
    }),
  );
  test('it should toggle filter', async () => {
    render(<Home />);
    await flushPromisesAndTimers();

    const toggleButton = screen.getByRole('button', { name: 'Filter' });
    userEvent.click(toggleButton);

    for (const item of mockState.genres) {
      const filter = await screen.findByText(item.name);
      expect(filter).toBeInTheDocument();
    }

    const filterList = ['컨텐츠', '평 점', '장 르'];

    for (const item of filterList) {
      await screen.findByText(item);
    }

    const cancel = screen.getByRole('button', { name: '취소' });
    userEvent.click(cancel);

    for (const item of filterList) {
      await screen.findByText(item);
    }
  });

  it('should switch content', async () => {
    render(<Home />);

    await flushPromisesAndTimers();

    const filterButton = screen.getByRole('button', { name: 'Filter' });

    userEvent.click(filterButton);

    const switchButton = await screen.findByRole('checkbox', { name: 'TV' });
    userEvent.click(switchButton);

    const movie = await screen.findByRole('checkbox', { name: 'MOVIE' });
    expect(movie).toBeInTheDocument();

    const tv = screen.queryByRole('checkbox', { name: 'TV' });
    expect(tv).not.toBeInTheDocument();
  });

  it('should select popularity', async () => {
    render(<Home />);

    await flushPromisesAndTimers();

    const filterButton = screen.getByRole('button', { name: 'Filter' });

    userEvent.click(filterButton);

    const popularities = Array.from(Array(10).keys(), (key) => key + 1);
    for (const popularity of popularities) {
      const indicator = await screen.findByText(popularity);
      expect(indicator).toHaveClass('bg-gray-300');
    }

    //selector 별도 테스트 필요함 selector ui 테스트는 아직 지원 안함.
  });

  it('filter popularity selector test', () => {
    const snapshot = snapshot_UNSTABLE();
    expect(snapshot.getLoadable(progressWidthState('base')).valueOrThrow()).toBe('100%');
    expect(snapshot.getLoadable(progressWidthState('hide')).valueOrThrow()).toBe('0%');
    expect(snapshot.getLoadable(progressWidthState('percent')).valueOrThrow()).toBe('0%');

    const changed = snapshot_UNSTABLE(({ set }) => set(popularityState, [3, 5]));
    expect(changed.getLoadable(progressWidthState('hide')).valueOrThrow()).toBe('25%');
    expect(changed.getLoadable(progressWidthState('percent')).valueOrThrow()).toBe('45%');

    //@ts-ignore
    expect(changed.getLoadable(progressWidthState('percentd')).errorOrThrow()).toBe('popularityWidthPercent error');
  });

  it('progressBarStyleState selector test', () => {
    const snapshot = snapshot_UNSTABLE();

    //const selector 은 테스트 아직 안됨.
    // expect(snapshot.getLoadable(progressBarStyleState('base')).valueOrThrow).toBe({ zIndex: 'z-30' });
  });

  it('checkIsSelectedPopularityState selector test', () => {
    const snapshot = snapshot_UNSTABLE();
    expect(snapshot.getLoadable(checkIsSelectedPopularityState(1)).valueOrThrow()).toBe(false);
    const change = snapshot_UNSTABLE(({ set }) => set(popularityState, [5]));
    expect(change.getLoadable(checkIsSelectedPopularityState(2)).valueOrThrow()).toBe(false);
    expect(change.getLoadable(checkIsSelectedPopularityState(5)).valueOrThrow()).toBe(true);

    const changed2 = snapshot_UNSTABLE(({ set }) => set(popularityState, [5, 10]));
    expect(changed2.getLoadable(checkIsSelectedPopularityState(6)).valueOrThrow()).toBe(true);
    expect(changed2.getLoadable(checkIsSelectedPopularityState(9)).valueOrThrow()).toBe(true);
    expect(changed2.getLoadable(checkIsSelectedPopularityState(10)).valueOrThrow()).toBe(true);
    expect(changed2.getLoadable(checkIsSelectedPopularityState(11)).valueOrThrow()).toBe(false);
  });
});

// 테스트를 많이 못했다. 아톰은 잘 되는데
// 셀렉터와 병행해서 ui 를 테스트 하는 방법이 아직 명확하지 않은 것 같았다.
// constest selector 도 테스트가 잘 되지 않았다.
