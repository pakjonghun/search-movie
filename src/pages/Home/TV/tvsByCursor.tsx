import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { tvCountPerCursorState } from '@recoil/tv/tv.selector';
import TVItem from './tvItem';
import { produce } from 'immer';
import { tvCursorListState } from '@recoil/tv/tv.atom';
import { v4 as uuidv4 } from 'uuid';

interface props {
  cursor: number;
}

const MoviesByCursor: React.FC<props> = ({ cursor }) => {
  const tvsCountByCursor = useRecoilValue(tvCountPerCursorState(cursor));
  const array = Array.from(Array(tvsCountByCursor).keys());
  const setTVCursorList = useSetRecoilState(tvCursorListState);

  useEffect(() => {
    setTVCursorList((pre) =>
      produce(pre, (draft) => {
        draft[cursor - 1] = tvsCountByCursor;
        return draft;
      }),
    );
  }, [cursor, tvsCountByCursor, setTVCursorList]);

  return (
    <>
      {array.map((index) => (
        <TVItem key={uuidv4()} cursor={cursor} index={index} />
      ))}
    </>
  );
};

export default React.memo(MoviesByCursor);
