import { Movie } from 'types';
import { atom, atomFamily } from 'recoil';
import { http } from '../../axiosInstance';

type GetFetchArgs = { url: string; page: number };

const fetFetch = async <T>({ url, page }: GetFetchArgs) => {
  try {
    const { data } = await http.get<T>(url, {
      params: {
        api_key: process.env.KEY,
        page,
      },
    });
    return data;
  } catch (err) {
    throw 'error';
  }
};

const apis = {
  getAllMovies: (args: GetFetchArgs) => fetFetch(args),
};

export const isLoading = atomFamily<boolean, string>({
  key: 'isLoading',
  default: false,
});

export const movieCursor = atom({
  key: 'movieCursor',
  default: 1,
});

export const allMovies = atom<Movie[]>({
  key: 'allMovies',
  default: [],
});
