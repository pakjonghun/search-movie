import React, { FC } from 'react';

interface props {
  name: string;
  id: string;
  value: string;
  indicator: string | React.ReactNode;
  classes?: string;
}
const RadioButton: FC<props> = ({ name, id, value, indicator, classes }) => {
  return (
    <label htmlFor={id} className={classes ? classes : ''}>
      {indicator}
      <input type="radio" name={name} id={id} value={value} className="hidden" />
    </label>
  );
};

export default RadioButton;
