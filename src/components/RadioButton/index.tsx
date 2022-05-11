import React, { FC } from 'react';

interface props {
  name: string;
  id: string;
  value: string;
  indicator: string | React.ReactNode;
}
const RadioButton: FC<props> = ({ name, id, value, indicator }) => {
  return (
    <label
      htmlFor={id}
      className="hover:text-gray-50 hover:bg-blue-500 py-2 px-4 scale-md cursor-pointer"
    >
      {indicator}
      <input type="radio" name={name} id={id} value={value} className="hidden" />
    </label>
  );
};

export default RadioButton;
