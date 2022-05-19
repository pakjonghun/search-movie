import { Movie } from 'api/api.type';
import { apis } from '../../api/api';

export class MovieCache {
  private idList: Record<number, number[]> = {};
  private movieList: Record<number, Movie | null> = {};
  static instance: MovieCache;

  public static getInstance() {
    return this.instance || new this();
  }

  async getIds(cursor: number) {
    if (this.idList[cursor]) return this.idList[cursor];
    this.idList[cursor] = await apis.movieIds(cursor);
    return this.idList[cursor];
  }

  async getMovie(movieId: number) {
    if (this.movieList[movieId]) return this.movieList[movieId];
    this.movieList[movieId] = await apis.movieDetail(movieId);
    return this.movieList[movieId];
  }
}
