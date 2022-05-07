import React from 'react';
import { render, screen } from '@testing-library/react';
import Routers from './Routes';
describe('test', () => {
    it('should', async () => {
        render(<Routers />);
        const c = screen.getByRole('heading', { name: 'home' }) as HTMLHeadingElement;
    });
});
