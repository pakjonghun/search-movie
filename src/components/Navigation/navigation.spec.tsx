import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './index';
import { mockMovieMenus } from './mock/mockData';
import userEvent from '@testing-library/user-event';

describe('navigation', () => {
  it('should have menus', async () => {
    render(
      <BrowserRouter>
        <Navigation menus={mockMovieMenus} />
      </BrowserRouter>,
    );

    for (const { name, path } of mockMovieMenus) {
      const link = screen.getByRole('link', { name });
      expect(link).toHaveAttribute('href', path);

      userEvent.click(link);
      await waitFor(() => expect(link).toHaveClass('bg-gray-500 text-gray-50 pointer-events-none'));
    }
  });
});
