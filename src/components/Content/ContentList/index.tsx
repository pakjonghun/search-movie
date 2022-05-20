import React from 'react';
import { Content } from '@api/api.type';
import { Loadable } from 'recoil';
import FilterList from './FilterList';

interface props {
  index: number;
  loadableContent: Loadable<Content[]>;
}

const ContentList: React.FC<props> = ({ loadableContent, index }) => {
  switch (loadableContent.state) {
    case 'loading':
      return null;
    case 'hasValue':
      return <FilterList index={index} contentList={loadableContent.contents} />;

    default:
      throw new Error('error on movieItem');
  }
};

export default ContentList;
