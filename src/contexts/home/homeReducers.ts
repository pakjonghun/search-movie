import { initialState } from '.';
import { Action, State } from './types';

const homeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLECONTENT':
      return { ...state, isTVON: !state.isTVON };
    case 'TOGGLEFILTER':
      return { ...state, isFilterOpen: !state.isFilterOpen };
    case 'SELECTGENRE':
      return { ...state, genres: [...state.genres, action.payload] };
    case 'CLEANGENRE':
      return { ...state, genres: state.genres.filter((genre) => genre !== action.payload) };
    case 'ADDPOPULARITY': {
      const payload = action.payload;
      const curPopularity = state.popularity;

      if (curPopularity.includes(payload)) return { ...state, popularity: curPopularity.filter((p) => p !== payload) };
      if (curPopularity.length < 2) return { ...state, popularity: [...curPopularity, payload] };
      else return { ...state, popularity: [payload] };
    }
    case 'CLEARFILTER': {
      return initialState;
    }

    default:
      throw new Error('error on homeReducer');
  }
};

export default homeReducer;
