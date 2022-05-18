import React, { useCallback, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { checkIsLastTVItem, tvItemState, tvTotlaCursorQuery } from '@recoil/tv/tv.selector';
import useInfinityScroll from '@hooks/useInfinityScroll';
import { tvCursorState } from '@recoil/tv/tv.atom';
import VirtualizedItem from '@components/VirtualizedItem';
import { handleImageError, imgUrlMaker, joinClass } from '@utils/styleUtil';
import { Link } from 'react-router-dom';

interface props {
  index: number;
  cursor: number;
}

const MovieItem: React.FC<props> = ({ index, cursor }) => {
  const tv = useRecoilValue(tvItemState({ cursor, index }));
  const isLastItem = useRecoilValue(checkIsLastTVItem({ cursor, index }));
  const totalTvScroll = useRecoilValue(tvTotlaCursorQuery);
  const setCursor = useSetRecoilState(tvCursorState);
  const [isImageEmpty, setIsImageEmpty] = useState(false);

  const onScroll: IntersectionObserverCallback = useCallback(
    (extras) => {
      if (extras[0].isIntersecting) {
        setCursor((pre) => pre + 1);
      }
    },
    [setCursor],
  );

  const ref = useInfinityScroll({ callback: onScroll, shouldObserve: isLastItem });
  const { id, name, poster_path, first_air_date, vote_average, overview } = tv;
  return (
    <VirtualizedItem offset={1000} height={150}>
      <Link to={String(id)} state={{ cursor, index }}>
        <div>
          <div className="flex space-x-2  bg-gray-50 shadow-md h-40 border-[1px] rounded-md scale-md overflow-hidden cursor-pointer">
            <img
              className={joinClass('h-full w-[105]', isImageEmpty ? 'bg-slate-200 animate-pulse' : '')}
              src={imgUrlMaker(poster_path)}
              alt={name}
              onError={(event) => {
                setIsImageEmpty(true);
                handleImageError(event);
              }}
            />
            <div className="mt-2 px-2 py-1 space-y-3">
              <h2 className="text-gray-800 font-bold">{name}</h2>
              <span className="mr-3 text-gray-500 text-sm font-medium">{first_air_date}</span>
              <span className="text-gray-500 text-sm font-medium">{vote_average}</span>
              <p className="text-gray-600 text-sm">{overview?.substring(0, 150)}...</p>
            </div>
          </div>
        </div>
      </Link>
      {isLastItem && (
        <div className="flex justify-center items-center mt-5 font-medium text-gray-50" ref={ref}>{`${
          totalTvScroll - cursor
        }번 더 스크롤 할 수 있어요.`}</div>
      )}
    </VirtualizedItem>
  );
};

export default React.memo(MovieItem);
