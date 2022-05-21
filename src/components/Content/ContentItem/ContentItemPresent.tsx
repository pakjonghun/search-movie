import React from 'react';
import { joinClass } from '@utils/styleUtil';
import { Link } from 'react-router-dom';
import { Content } from '@api/api.type';
import ContentImage from './ContentImage';

interface props {
  contentItem: Content;
  isMatch: boolean;
  linkPath: string;
}

const ContentItem: React.FC<props> = ({ contentItem, isMatch, linkPath }) => {
  const { poster_path, first_air_date, name, release_date, title, vote_average, overview } = contentItem;

  const contentDate = first_air_date ? first_air_date : release_date;
  const contentTitle = name ? name : title;

  return (
    <Link
      className={joinClass(isMatch ? '' : 'pointer-events-none')}
      to={linkPath}
      state={{ contentOverview: overview, contentTitle }}
    >
      <article
        className={joinClass(
          'flex space-x-2  bg-gray-50 shadow-md h-40 border-[1px] rounded-md scale-md overflow-hidden cursor-pointer',
          isMatch ? '' : 'opacity-30',
        )}
      >
        <ContentImage title={contentTitle || ''} posterPath={poster_path} />

        <div className="mt-2 px-2 py-1 space-y-3">
          <h2 className="text-gray-800 font-bold">{contentTitle}</h2>
          <span className="mr-3 text-gray-500 text-sm font-medium">{contentDate}</span>
          <span className="text-gray-500 text-sm font-medium">{vote_average}</span>
          <p className="text-gray-600 text-sm">{overview?.substring(0, 150)}...</p>
        </div>
      </article>
    </Link>
  );
};

export default React.memo(ContentItem);
