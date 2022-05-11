import React from 'react';
import { render, screen } from '@testing-library/react';
import RadioButton from '.';
import uuid from 'uuid';

const mockid = jest.mock('uuid');

const props = {
  id: 'id',
  value: 'value',
  name: 'name',
  indicator: 'indocator',
};

test.skip('title should be in', () => {
  const { id, value, name, indicator } = props;
  render(<RadioButton {...props} />);
  // jest.spyOn(uuid, 'v4').mockResolvedValue('uuid');

  const idComponent = screen.getByRole('radio');
  expect(idComponent.id).toBe(props.id);
});
