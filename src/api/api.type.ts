export type FetchPayload = { url: string; params?: any };

export type Response<T> = {
  page?: number;
  results?: T;
  total_pages?: number;
  total_results?: number;
  status_message?: string;
  status_code?: number;
};

export type Movie = {
  genre_ids: number[];
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: false;
  vote_average: number;
};

export type TV = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
};
