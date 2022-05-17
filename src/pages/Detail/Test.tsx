import React from 'react';
import { useParams, useLocation } from 'react-router-dom';

const Test = () => {
  const a = useParams();
  console.log(a);

  const b = useLocation();
  console.log(b);
  return <h1>a</h1>;
};

export default Test;
