import React from 'react';
import { movieVideoQuery } from '@recoil/movie/movie.selector';
import { useParams } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { getVideoUrl } from './detail.util';

interface props {
  contentTitle?: string;
}

const ContentVideo: React.FC<props> = ({ contentTitle }) => {
  const { id } = useParams();
  const videoKeys = useRecoilValue(movieVideoQuery(Number(id)));
  return (
    <>
      {!videoKeys.length && <p className="font-medium text-gray-500">No Video Information</p>}
      <ul className="space-y-5">
        {videoKeys.slice(0, 2).map((videoId) => (
          <li key={uuidv4()}>
            <iframe
              role="document"
              loading="eager"
              title={contentTitle || ''}
              className={'w-full aspect-video'}
              src={getVideoUrl(videoId)}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default ContentVideo;
