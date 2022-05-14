import React from 'react';
import ContentFilter from './ContentFilter';
import GenreFilter from './GenreFilter';
import PopularityFilter from './PopularityFilter';

export const filterList = [
  { filterName: '컨텐츠', filterItem: <ContentFilter /> },
  { filterName: '평 점', filterItem: <PopularityFilter /> },
  { filterName: '장 르', filterItem: <GenreFilter /> },
];
