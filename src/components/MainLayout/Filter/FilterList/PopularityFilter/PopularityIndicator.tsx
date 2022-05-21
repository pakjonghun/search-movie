import React from 'react';
import PopularityItem from './PopularityItem';
import { v4 as uuidv4 } from 'uuid';

const Indicator = () => {
  return (
    <ul className="flex justify-between w-full z-40">
      {Array.from(Array(10).keys()).map((popularity) => {
        return <PopularityItem key={uuidv4()} popularity={popularity + 1} />;
      })}
    </ul>
  );
};

export default Indicator;
