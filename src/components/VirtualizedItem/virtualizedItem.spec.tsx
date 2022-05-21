import React from 'react';
import { render, screen } from '@testing-library/react';
import VirtualizedItem from '.';
import { MockChildern } from './mock/mockComponent';
import { MockObserve } from './mock/mockObserver';

describe('virtualized item', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should render virtualized item', () => {
    jest.doMock('intersection-observer', () => MockObserve, { virtual: true });
    window.IntersectionObserver = jest.requireMock('intersection-observer');

    render(
      <VirtualizedItem height={10}>
        <MockChildern />
      </VirtualizedItem>,
    );

    const virtualizedItem = screen.getByTestId('listitem');
    expect(virtualizedItem).toHaveClass('bg-slate-50');
    expect(virtualizedItem).toHaveStyle('height: 10px;');
  });
});

afterAll(() => {
  jest.clearAllMocks();
});
