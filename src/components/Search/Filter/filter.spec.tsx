import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import ApplyButtons from '@components/Search/Filter/FilterApplyButtons';
import { flushPromisesAndTimers } from '@utils/testUtil';

describe('filter test', () => {
  it('should toggle filter', async () => {
    render(
      <RecoilRoot>
        <ApplyButtons />
      </RecoilRoot>,
    );

    await flushPromisesAndTimers();

    screen.getByRole('button', { name: '취소' });
    screen.getByRole('button', { name: '적용' });
  });
});

afterAll(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});
