import React, { useCallback } from 'react';
import VirtualizedItem from '@components/VirtualizedItem';
import { Content } from '@api/api.type';
import { useRecoilState } from 'recoil';
import ContentItem from '../ContentItem';
import useInfinityScroll from '@hooks/useInfinityScroll';
import Loading from '@components/Loading';
import { cursorState } from '@recoil/common/atom';
import { useLocation } from 'react-router-dom';

interface props {
  index: number;
  contentList: Content[];
}

const FilterList: React.FC<props> = ({ index, contentList }) => {
  const { pathname } = useLocation();
  const [cursor, setCursor] = useRecoilState(cursorState(pathname));
  const isLastCursor = cursor - 1 === index;

  const onScroll: IntersectionObserverCallback = useCallback(
    (extras) => {
      if (extras[0].isIntersecting) {
        setCursor((pre) => pre + 1);
      }
    },
    [setCursor],
  );

  const ref = useInfinityScroll({ callback: onScroll, shouldObserve: isLastCursor });

  return (
    <li className="relative space-y-3">
      {contentList.map((contentItem) => (
        <VirtualizedItem key={contentItem.id} offset={300} height={150}>
          <ContentItem contentItem={contentItem} key={contentItem.id} />
        </VirtualizedItem>
      ))}
      {Boolean(contentList.length) && isLastCursor && (
        <div ref={ref} className="absolute bottom-0 inset-x-0">
          <Loading />
        </div>
      )}
      {Boolean(!contentList.length) && <div>검색 결과가 없습니다.</div>}
    </li>
  );
};

export default React.memo(FilterList);
