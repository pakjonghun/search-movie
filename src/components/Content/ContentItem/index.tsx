import React from 'react';
import { Content } from '@api/api.type';
import useCheckContent from '@hooks/useCheckContent';
import useFilter from './useFilter';
import ContentItemPresent from './ContentItemPresent';

interface props {
  contentItem: Content;
}

const ContentItem: React.FC<props> = ({ contentItem }) => {
  const isMatch = useFilter(contentItem);
  const content = useCheckContent();
  const linkPath = `/${content}s/${contentItem.id}`;
  return <ContentItemPresent isMatch={Boolean(isMatch)} linkPath={linkPath} contentItem={contentItem} />;
};

export default React.memo(ContentItem);
