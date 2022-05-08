import { ACTIONS } from './homeActions';

export type State = {
  isFilterOpen: boolean;
  isTVON: boolean;
  genres: string[];
  popularity: number[];
};

export type Action = { type: keyof typeof ACTIONS; payload?: any };

export type Dispatch = (action: Action) => void;

export type CreateHomeStateContext = State;

export type CreateHomeDispatchContext = Dispatch;
