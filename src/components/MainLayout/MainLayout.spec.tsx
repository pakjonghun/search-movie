import React from 'react';
import { render, screen } from '@testing-library/react';
import MainLayout from '.';

const props = {
  title: 'title',
  children: <></>,
};

describe('MainLayout', () => {
  it('it should have title and no back-button', () => {
    render(<MainLayout {...props} />);

    screen.getByRole('heading', { name: props.title });
    const button = screen.queryByRole('button', { name: 'back' });
    expect(button).toBeNull;
  });

  it('it should have back button and grid,()', () => {
    render(<MainLayout {...props} canBack={true} />);

    screen.getByRole('button', { name: /back/i });
    const header = screen.getByRole('navigation');
    expect(header.classList.contains('grid-cols-3')).toBeTruthy;
  });
});
