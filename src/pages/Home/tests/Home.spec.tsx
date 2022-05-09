import React from 'react';
import userEvent from '@testing-library/user-event';
import Home from '..';
import { render } from './test.utils';
import { getByRole, screen } from '@testing-library/react';
import { isEditable } from '@testing-library/user-event/dist/types/utils';

describe('Home', () => {
  it('should toggle Filter', async () => {
    render(<Home />);

    const filterButton = screen.getByRole('button', { name: 'Filter' });
    userEvent.click(filterButton);

    await screen.findByRole('heading', { name: '컨텐츠' });
    await screen.findByRole('heading', { name: '평 점' });
    await screen.findByRole('heading', { name: '장 르' });
    const cancelButton = await screen.findByRole('button', { name: '취소' });

    userEvent.click(cancelButton);
    const content = screen.queryByRole('heading', { name: '컨텐츠' });
    const popularity = screen.queryByRole('heading', { name: '평 점' });
    const genre = screen.queryByRole('heading', { name: '장 르' });
    expect(content).not.toBeInTheDocument;
    expect(popularity).not.toBeInTheDocument;
    expect(genre).not.toBeInTheDocument;
  });

  it('should switch content', async () => {
    render(<Home />);
    const filterButton = screen.getByRole('button', { name: 'Filter' });
    userEvent.click(filterButton);
    const switchButton = await screen.findByRole('checkbox', { name: 'Movie' });
    userEvent.click(switchButton);
    await screen.findByRole('checkbox', { name: 'TV' });
  });

  it('should paint by blue progressBar and clean by gray', async () => {
    render(<Home />);
    const filterButton = screen.getByRole('button', { name: 'Filter' });
    userEvent.click(filterButton);

    for (let i = 1; i <= 10; i++) {
      const onePopularity = await screen.findByText(i);
      userEvent.click(onePopularity);
      expect(onePopularity.classList.contains('blue')).toBeTruthy;

      userEvent.click(onePopularity);
      expect(onePopularity.classList.contains('gray')).toBeTruthy;
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
          expect(kPopularity.classList.contains('blue'));
        }

        userEvent.click(otherPopularity);
      }
    }
  });

  it('should be six genre', async () => {
    render(<Home />);

    const filterButton = screen.getByRole('button', { name: 'Filter' });
    userEvent.click(filterButton);

    const toHangleGenres = ['액션', '멜로', 'SF', '스릴', '감동', '애니'];
    for (const genre of toHangleGenres) {
      await screen.findByRole('checkbox', { name: genre });
    }
  });

  it('should six genre checkable ', async () => {
    render(<Home />);

    const filterButton = screen.getByRole('button', { name: 'Filter' });
    userEvent.click(filterButton);

    const toHangleGenres = ['액션', '멜로', 'SF', '스릴', '감동', '애니'];
    for (const genre of toHangleGenres) {
      const checkButton = await screen.findByRole('checkbox', { name: genre });
      await userEvent.click(checkButton);
      screen.getByText('✓');

      await userEvent.click(checkButton);
      const isChecked = screen.queryByText('✓');
      expect(isChecked).toBeNull;
    }
  });

  it.only('should clean filter condition', async () => {
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
      expect(isChecked).toBeNull;
    }

    for (let i = 1; i < 11; i++) {
      const popularity = screen.getByText(i);
      await userEvent.click(popularity);

      const cancel = screen.getByRole('button', { name: '취소' });
      await userEvent.click(cancel);
      await userEvent.click(filterButton);

      const isChecked = screen.queryByText(i);
      expect(isChecked).toBeNull;
    }

    const switchButton = screen.getByRole('checkbox', { name: 'Movie' });
    await userEvent.click(switchButton);
    const cancel = screen.getByRole('button', { name: '취소' });
    await userEvent.click(cancel);
    await userEvent.click(filterButton);
    const isSiwtched = screen.queryByRole('checkbox', { name: 'Movie' });
    expect(isSiwtched).toBeNull;
  });
});
