import React from 'react';
import { Loadable } from 'recoil';
import Loading from '@components/Loading';
import { v4 as uuidv4 } from 'uuid';
import ContentList from './ContentList';
import { Content as ContentType } from '@api/api.type';
import useMemoryScrollTop from '@hooks/useMemoryScrollTop';

interface props {
  loadbaleContentList: Loadable<Loadable<ContentType[]>[]>;
}

const Content: React.FC<props> = ({ loadbaleContentList }) => {
  const listRef = useMemoryScrollTop();

  switch (loadbaleContentList.state) {
    case 'loading':
      return <Loading classes="w-full h-full bg-red-500" />;
    case 'hasValue':
      return (
        <ul ref={listRef} className="mt-5 py-2 px-5 bg space-y-3 h-[40rem] overflow-y-auto">
          {loadbaleContentList.contents.map((loadableContent, index) => (
            <ContentList key={uuidv4()} index={index} loadableContent={loadableContent} />
          ))}
        </ul>
      );
    default:
      throw new Error('error on movieList');
  }
};

export default Content;
