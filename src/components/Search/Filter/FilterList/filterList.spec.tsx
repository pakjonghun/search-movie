import React from 'react';
import { filterContentState, genresState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { render, screen } from '@testing-library/react';
import { useEffect } from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import ContentFilter from './ContentFilter';
import userEvent from '@testing-library/user-event';
import { flushPromisesAndTimers } from '@utils/testUtil';
import { v4 as uuidv4 } from 'uuid';
import GenreFilter from './GenreFilter';

const genres = [
  { id: 1, name: 'melo' },
  { id: 2, name: 'action' },
];

jest.mock('uuid', () => ({
  v4: () => Math.random().toString(35).substring(11, 35),
}));

//@ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        genres,
      }),
  }),
);

const Observer = ({ node, onChange }: { node: any; onChange: any }) => {
  const filterContentStateValue = useRecoilValue(node);
  useEffect(() => {
    onChange(filterContentStateValue);
  }, [onChange, filterContentStateValue]);
  return null;
};

describe('filterList test', () => {
  it('contentFilter test', async () => {
    render(
      <RecoilRoot>
        <Observer node={filterContentState} onChange={jest.fn()} />
        <ContentFilter />
      </RecoilRoot>,
    );

    const button = await screen.findByRole('checkbox', { name: 'TV' });
    userEvent.click(button);
    await screen.findByRole('checkbox', { name: 'MOVIE' });
    userEvent.click(button);
    await screen.findByRole('checkbox', { name: 'TV' });
  });

  it('genreFiilter test ', async () => {
    render(
      <RecoilRoot>
        {[genresState, selectedGenreIdsState].map((state) => (
          <Observer key={uuidv4()} node={state} onChange={jest.fn()} />
        ))}
        <GenreFilter />
      </RecoilRoot>,
    );

    await flushPromisesAndTimers();

    for (const { name } of genres) {
      const button = await screen.findByRole('checkbox', { name });
      userEvent.click(button);
      await screen.findByText('✓');
      userEvent.click(button);
    }
  });
});

afterAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});
