import { Action, State } from './types';

const homeReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'TOGGLECONTENT':
      return { ...state, isTVON: !state.isTVON };
    case 'TOGGLEFILTER':
      return { ...state, isFilterOpen: action.payload };
    case 'SELECTGENRE':
      return { ...state, genres: [...state.genres, action.payload] };
    case 'CLEANGENRE':
      return { ...state, genres: state.genres.filter((genre) => genre !== action.payload) };
    case 'ADDPOPULARITY': {
      if (state.popularity.includes(action.payload)) return state;
      if (state.popularity.length < 2) return { ...state, popularity: [...state.popularity, action.payload] };
      else return { ...state, popularity: [action.payload] };
    }

    default:
      throw new Error('error on homeReducer');
  }
};

export default homeReducer;
