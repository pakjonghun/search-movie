import { Content } from '@api/api.type';
import { searchTermState } from '@recoil/common/atom';
import { popularityState, selectedGenreIdsState } from '@recoil/filter/filter.atom';
import { useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { checkIsGenresInclude, checkIsPopularityMatch } from '../content.util';

const useFilter = (contentItem: Content) => {
  const { pathname } = useLocation();
  const { adult, name, title, genre_ids, genres: gen, vote_average } = contentItem;

  const contentTitle = name ? name : title;
  const contentGenre = gen ? gen.map(({ id }) => id) : genre_ids || [];

  const searchTerm = useRecoilValue(searchTermState(pathname));
  const popularities = useRecoilValue(popularityState(pathname));
  const genres = useRecoilValue(selectedGenreIdsState(pathname));

  const isNotAdult = !adult;
  const isTitleContain = contentTitle?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
  const isGenresContain = checkIsGenresInclude(contentGenre, genres);
  const isPopularityMatch = checkIsPopularityMatch(vote_average, popularities);
  const isMatch = isNotAdult && isTitleContain && isGenresContain && isPopularityMatch;

  return isMatch;
};

export default useFilter;
