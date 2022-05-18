import { getFetchByFetch } from './util';
import { Movie, Response, TV, MovieVideoList } from './api.type';
import { Genre } from '@recoil/filter/filter.type';

export const apis = {
  genres: async () => {
    const { genres } = await getFetchByFetch<{ genres: Genre[] }>({ url: '/genre/list' });
    return genres;
  },
  popularMovies: async (page: number) => {
    const { results } = await getFetchByFetch<Response<Movie[]>>({
      url: '/movie/popular',
      params: { page },
    });
    return results;
  },

  popularTVs: async (page: number) => {
    const { results } = await getFetchByFetch<Response<TV[]>>({
      url: '/tv/popular',
      params: { page },
    });
    return results;
  },

  movieTotalCursor: async (page: number, query: string) => {
    const { total_pages } = await getFetchByFetch<Response<Movie[]>>({
      url: '/search/movie',
      params: { page, query: query || '' },
    });
    return total_pages;
  },
  tvsTotalCursor: async (page: number) => {
    const { total_pages } = await getFetchByFetch<Response<TV[]>>({
      url: '/tv/popular',
      params: { page },
    });
    return total_pages;
  },
  movieVideo: async (movieId: number) => {
    const { results } = await getFetchByFetch<MovieVideoList>({
      url: `/movie/${movieId}/videos`,
    });
    const videoKeyList = results.map(({ key }) => key);
    return videoKeyList;
  },
  tvVideo: async (tvId: number) => {
    const { results } = await getFetchByFetch<MovieVideoList>({
      url: `/tv/${tvId}/videos`,
    });
    if (results.some(({ key }) => key == undefined)) return [];
    const videoKeyList = results.map(({ key }) => key);
    return videoKeyList;
  },
};
