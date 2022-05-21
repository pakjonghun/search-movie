import React from 'react';
import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { mockTVContent } from '../mock/content';
import FilterList from './FilterList';
import { BrowserRouter } from 'react-router-dom';
import { MockObserve } from '../mock/intersectionOpserver';

const mockContent = [mockTVContent];

describe('contentList', () => {
  beforeEach(() => {
    jest.doMock('intersection-observer', () => MockObserve, { virtual: true });
    window.IntersectionObserver = jest.requireMock('intersection-observer');
  });

  it('should have loading spinner ', () => {
    render(
      <RecoilRoot>
        <BrowserRouter>
          <FilterList contentList={mockContent} index={0} />
        </BrowserRouter>
      </RecoilRoot>,
    );

    screen.getByRole('document');
  });
});

afterAll(() => {
  jest.clearAllMocks();
});
