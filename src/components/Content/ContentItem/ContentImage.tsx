import React, { useState } from 'react';
import { handleImageError, imgUrlMaker, joinClass } from '@utils/styleUtil';

interface props {
  posterPath: string;
  title: string;
}

const ContentImage: React.FC<props> = ({ posterPath, title }) => {
  const [isImageEmpty, setIsImageEmpty] = useState(false);

  return (
    <img
      className={joinClass('h-full', isImageEmpty ? 'w-[105px] bg-slate-200' : '')}
      src={imgUrlMaker(posterPath)}
      alt={title}
      onError={(event) => {
        setIsImageEmpty(true);
        handleImageError(event);
      }}
    />
  );
};

export default ContentImage;
