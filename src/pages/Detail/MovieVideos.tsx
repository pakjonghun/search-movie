import React from 'react';
import { movieItemState, movieVideoQuery } from '@recoil/movie/movie.selector';
import { useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getVideoUrl } from './detail.util';

const MovieVideos = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { cursor, index } = state as { cursor?: number; index?: number };
  if (cursor == undefined || index == undefined) throw new Error('error on movieVideo');

  const videoKeys = useRecoilValue(movieVideoQuery(Number(id)));
  const { overview, title } = useRecoilValue(movieItemState({ cursor, index }));
  return (
    <div className="space-y-5 mt-10">
      <h1 className="font-bold text-gray-50 text-lg md:text-2xl">{title}</h1>
      <p className="font-medium text-gray-200 md:text-xl">{overview}</p>
      {!videoKeys.length && <p className="font-medium text-gray-200">No Video Information</p>}
      <ul className="space-y-5">
        {videoKeys.slice(0, 2).map((key) => (
          <li key={key}>
            <iframe key={key} loading="eager" title={title} className={'w-full aspect-video'} src={getVideoUrl(key)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieVideos;
