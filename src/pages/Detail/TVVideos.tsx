import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { getVideoUrl } from './detail.util';
import { tvItemState, tvVideoQuery } from '@recoil/tv/tv.selector';
import { v4 as uuidv4 } from 'uuid';

const TVVideos = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { cursor, index } = state as { cursor?: number; index?: number };
  if (cursor == undefined || index == undefined) throw new Error('error on movieVideo');

  const videoKeys = useRecoilValue(tvVideoQuery(Number(id)));
  const { name, overview } = useRecoilValue(tvItemState({ cursor, index }));
  return (
    <div className="space-y-5 mt-10">
      <h1 className="font-bold text-gray-50 text-lg md:text-2xl">{name}</h1>
      <p className="font-medium text-gray-200 md:text-xl">{overview}</p>
      {!videoKeys.length && <p className="font-medium text-gray-200">No Video Information</p>}
      <ul className="space-y-5 max-h-[60vh] overflow-y-auto">
        {videoKeys.slice(0, 2).map((videoId) => (
          <li key={uuidv4()}>
            <iframe loading="eager" title={name} className={'w-full aspect-video'} src={getVideoUrl(videoId)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TVVideos;
