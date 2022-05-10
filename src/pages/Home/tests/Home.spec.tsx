import React from 'react';
import userEvent from '@testing-library/user-event';
import Home from '..';

import { screen, render } from './test.utils';

describe('Home', () => {
  it('should toggle Filter', async () => {
    render(<Home />);

    const filterButton = screen.getByRole('button', { name: 'Filter' });
    await userEvent.click(filterButton);

    const a = screen.getByRole('heading', { name: '컨텐츠' });
    expect(a).toBeInTheDocument();

    screen.getByRole('heading', { name: '평 점' });
    screen.getByRole('heading', { name: '장 르' });
    screen.getByRole('button', { name: '취소' });

    await userEvent.click(filterButton);
    const content = screen.queryByRole('heading', { name: '컨텐츠' });
    const popularity = screen.queryByRole('heading', { name: '평 점' });
    const genre = screen.queryByRole('heading', { name: '장 르' });
    expect(content).not.toBeInTheDocument();
    expect(popularity).not.toBeInTheDocument();
    expect(genre).not.toBeInTheDocument();
  });

  it('should switch content', async () => {
    render(<Home />);
    const filterButton = screen.getByRole('button', { name: 'Filter' });
    await userEvent.click(filterButton);
    const switchButton = await screen.findByRole('checkbox', { name: 'Movie' });
    await userEvent.click(switchButton);
    screen.getByRole('checkbox', { name: 'TV' });
  });

  it('should paint by blue progressBar and clean by gray', async () => {
    render(<Home />);
    const filterButton = screen.getByRole('button', { name: 'Filter' });
    await userEvent.click(filterButton);

    for (let i = 1; i <= 10; i++) {
      const onePopularity = await screen.findByText(i);
      await userEvent.click(onePopularity);
      expect(onePopularity).toHaveClass(
        'flex items-center justify-center w-5 sm:w-6 aspect-square text-xs text-gray-50 rounded-full cursor-pointer z-40 bg-blue-400',
      );

      await userEvent.click(onePopularity);
      expect(onePopularity).toHaveClass(
        'flex items-center justify-center w-5 sm:w-6 aspect-square text-xs text-gray-50 rounded-full cursor-pointer z-40 bg-gray-300',
      );
    }
  });

  it('should paint between popularities by blue', async () => {
    render(<Home />);
    const filterButton = screen.getByRole('button', { name: 'Filter' });
    userEvent.click(filterButton);

    for (let i = 1; i <= 10; i++) {
      const onePopularity = await screen.findByText(i);
      userEvent.click(onePopularity);

      for (let j = 1; j <= 10; j++) {
        if (j === i) continue;
        const otherPopularity = await screen.findByText(j);
        userEvent.click(otherPopularity);

        const min = i < j ? i : j;
        const max = i < j ? j : i;

        for (let k = min; k <= max; k++) {
          const kPopularity = await screen.findByText(k);
          expect(kPopularity).toHaveClass(
            'flex items-center justify-center w-5 sm:w-6 aspect-square text-xs text-gray-50 rounded-full cursor-pointer z-40 bg-gray-300',
          );
        }

        userEvent.click(otherPopularity);
      }
    }
  });

  it('should be six genre', async () => {
    render(<Home />);

    const filterButton = screen.getByRole('button', { name: 'Filter' });
    await userEvent.click(filterButton);

    const toHangleGenres = ['액션', '멜로', 'SF', '스릴', '감동', '애니'];
    for (const genre of toHangleGenres) {
      screen.getByRole('checkbox', { name: genre });
    }
  });

  it('should six genre checkable ', async () => {
    render(<Home />);

    const filterButton = screen.getByRole('button', { name: 'Filter' });
    await userEvent.click(filterButton);

    const toHangleGenres = ['액션', '멜로', 'SF', '스릴', '감동', '애니'];
    for (const genre of toHangleGenres) {
      const checkButton = await screen.findByRole('checkbox', { name: genre });
      await userEvent.click(checkButton);
      screen.getByText('✓');

      await userEvent.click(checkButton);
      const isChecked = screen.queryByText('✓');
      expect(isChecked).not.toBeInTheDocument();
    }
  });

  it('should clean filter condition', async () => {
    render(<Home />);

    const filterButton = screen.getByRole('button', { name: 'Filter' });
    await userEvent.click(filterButton);

    const toHangleGenres = ['액션', '멜로', 'SF', '스릴', '감동', '애니'];
    for (const genre of toHangleGenres) {
      const checkButton = await screen.findByRole('checkbox', { name: genre });
      await userEvent.click(checkButton);
      screen.getByText('✓');

      const cancel = screen.getByRole('button', { name: '취소' });
      await userEvent.click(cancel);
      await userEvent.click(filterButton);

      const isChecked = screen.queryByRole('✓');
      expect(isChecked).not.toBeInTheDocument();
    }

    for (let i = 1; i < 11; i++) {
      const popularity = screen.getByText(i);
      await userEvent.click(popularity);

      const cancel = screen.getByRole('button', { name: '취소' });
      await userEvent.click(cancel);
      await userEvent.click(filterButton);

      const isChecked = screen.queryByText(i);
      expect(isChecked).toHaveClass(
        'flex items-center justify-center w-5 sm:w-6 aspect-square text-xs text-gray-50 rounded-full cursor-pointer z-40 bg-gray-300',
      );
    }

    const switchButton = screen.getByRole('checkbox', { name: 'Movie' });
    await userEvent.click(switchButton);
    screen.getByRole('checkbox', { name: 'TV' });
    const cancel = screen.getByRole('button', { name: '취소' });
    await userEvent.click(cancel);
    await userEvent.click(filterButton);
    const isSiwtched = screen.queryByRole('checkbox', { name: 'TV' });
    expect(isSiwtched).not.toBeInTheDocument();
    screen.getByRole('checkbox', { name: 'Movie' });
  });
});
