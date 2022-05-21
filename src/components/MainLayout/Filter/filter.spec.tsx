import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ApplyButtons from '@components/MainLayout/Filter/FilterApplyButtons';
import { ApplyButtonObserver } from './mock/mockRecoil';
import { BrowserRouter } from 'react-router-dom';
import { isFilterOpenState } from '@recoil/filter/filter.atom';
import RecoilTestObserver from '@components/RecoilTestObserver';
import FilterToggleButton from './FilterToggleButton';

describe('filter test', () => {
  it('should have cancel and confirm', () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <ApplyButtonObserver onChange={jest.fn()} />
          <ApplyButtons />
        </BrowserRouter>
      </RecoilRoot>,
    );

    screen.getByRole('button', { name: '취소' });
    screen.getByRole('button', { name: '확인' });
  });

  it('should have FilterButton', () => {
    render(
      <RecoilRoot>
        <RecoilTestObserver node={isFilterOpenState} onChange={jest.fn()} />
        <FilterToggleButton />
      </RecoilRoot>,
    );

    screen.getByRole('button', { name: 'Filter' });
  });
});

afterAll(() => {
  jest.clearAllMocks();
});
