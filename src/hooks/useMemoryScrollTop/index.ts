import { useLocation } from 'react-router-dom';
import { useEffect, useRef, useState, useCallback } from 'react';
import { scrollTopState } from '@recoil/common/atom';
import { useRecoilState } from 'recoil';
import useGetCursor from './useGetCursor';

const useMemoryScrollTop = () => {
  const { pathname } = useLocation();
  const cursor = useGetCursor(pathname);

  const [memorizedTop, setMemorizedTop] = useRecoilState(scrollTopState(pathname));
  const [listRef, setListRef] = useState<null | HTMLElement>(null);
  const scrollInfo = useRef<number>(0);

  useEffect(() => {
    if (listRef) {
      scrollInfo.current = memorizedTop;
    }
  }, [memorizedTop, listRef]);

  useEffect(() => {
    if (listRef) {
      return () => {
        setMemorizedTop(scrollInfo.current);
      };
    }
  }, [listRef, memorizedTop, setMemorizedTop]);

  useEffect(() => {
    if (listRef) {
      listRef.scrollTo({ top: memorizedTop });
    }
  }, [memorizedTop, listRef]);

  useEffect(() => {
    let timer: NodeJS.Timeout | undefined;
    function throttle(scrollTop: number) {
      if (timer) return;
      timer = setTimeout(() => {
        scrollInfo.current = scrollTop;
        timer = undefined;
      }, 200);
    }

    if (listRef) {
      listRef.addEventListener('scroll', (event: Event) => {
        const target = event.target as HTMLElement;
        const scrollHeight = target.scrollTop;
        throttle(scrollHeight);
      });

      return () => {
        listRef.removeEventListener('scroll', (event: Event) => {
          const target = event.target as HTMLElement;
          const scrollHeight = target.scrollTop;
          throttle(scrollHeight);
        });
      };
    }
  }, [memorizedTop, listRef]);

  useEffect(() => {
    if (listRef) {
      const scrollHeight = listRef.scrollHeight;
      listRef.scrollTo({ top: scrollHeight });
    }
  }, [cursor]);

  const setListRefCallBack = useCallback((element: HTMLUListElement) => {
    setListRef(element);
  }, []);

  return setListRefCallBack;
};

export default useMemoryScrollTop;
