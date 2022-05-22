import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ContentFilter from './ContentFilter';
import userEvent from '@testing-library/user-event';
import { flushPromisesAndTimers } from '@utils/testUtil';
import GenreFilter from './GenreFilter';
import { BrowserRouter } from 'react-router-dom';
import { GenreFilterObserver } from '../mock/mockRecoil';
import { mockGenres } from '../mock/mockData';

jest.mock('uuid', () => ({
  v4: () => Math.random().toString(35).substring(11, 35),
}));

//@ts-ignore
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve({
        genres: mockGenres,
      }),
  }),
);

describe('contentFilter', () => {
  it('should toggle content', async () => {
    render(
      <BrowserRouter>
        <ContentFilter />
      </BrowserRouter>,
    );

    const button = await screen.findByRole('checkbox', { name: 'MOVIE' });
    userEvent.click(button);
    await screen.findByRole('checkbox', { name: 'TV' });
    userEvent.click(button);
    await screen.findByRole('checkbox', { name: 'MOVIE' });
  });
});

describe('genreFilter', () => {
  it('should print genres list and toggled', async () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <GenreFilterObserver onChange={jest.fn()} />
          <GenreFilter />
        </BrowserRouter>
      </RecoilRoot>,
    );
    await flushPromisesAndTimers();

    for (const { name } of mockGenres) {
      const button = await screen.findByRole('checkbox', { name });
      userEvent.click(button);
      const checked = await screen.findByText('✓');
      userEvent.click(checked);
      await waitFor(() => {
        const genre = screen.queryByText('✓');
        expect(genre).not.toBeInTheDocument();
      });
    }
  });
});

afterAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});
