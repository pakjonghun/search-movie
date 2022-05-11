import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from '.';

const props = {
  id: 'id',
  value: 'value',
  name: 'name',
  indicator: 'indocator',
};

test('title should be in', () => {
  const { id, value, name, indicator } = props;
  render(<RadioButton {...props} />);

  const idComponent = screen.getByRole('radio', { name: indicator }) as HTMLInputElement;
  expect(idComponent.id).toBe(id);
  expect(idComponent.value).toBe(value);
  expect(idComponent.name).toBe(name);
});
