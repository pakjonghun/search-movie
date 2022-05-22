import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import PopularityFilter from '@components/MainLayout/Filter/FilterList/PopularityFilter';
import { PopularityFilterObserver } from '../../mock/mockRecoil';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { check } from 'prettier';

jest.mock('uuid', () => ({
  v4: () => Math.random().toString(35).substring(3, 35),
}));

describe('popularity test', () => {
  it('should have indicator', async () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <PopularityFilterObserver onChange={jest.fn()} />
          <PopularityFilter />
        </BrowserRouter>
      </RecoilRoot>,
    );

    for (let i = 1; i < 11; i++) {
      const indicator = screen.getByText(String(i));
      expect(indicator).toBeInTheDocument();
      expect(indicator).toHaveClass('bg-gray-300');
    }
  });
});

afterAll(() => {
  jest.clearAllMocks();
});
