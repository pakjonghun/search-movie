import React from 'react';
import { Helmet } from 'react-helmet-async';

interface props {
  title: string;
}

const Title: React.FC<props> = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};

export default Title;
