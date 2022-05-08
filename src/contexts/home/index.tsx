import React, { createContext, FC, useContext, useMemo, useReducer } from 'react';
import homeReducer from './homeReducers';
import { CreateHomeDispatchContext, CreateHomeStateContext, Dispatch, State } from './types';

const initialState = {
  isFilterOpen: false,
  isTVON: false,
  genres: [],
  popularity: [],
};

const HomeDispatchContext = createContext<CreateHomeDispatchContext | null>(null);
const HomeStateContext = createContext<CreateHomeStateContext | null>(null);

interface props {
  children: React.ReactNode;
}

const HomeContextProvider: FC<props> = ({ children }) => {
  const [state, dispatch] = useReducer(homeReducer, initialState);

  const cachedState = useMemo(() => {
    return state;
  }, [state]);

  return (
    <HomeStateContext.Provider value={cachedState}>
      <HomeDispatchContext.Provider value={dispatch}>{children}</HomeDispatchContext.Provider>
    </HomeStateContext.Provider>
  );
};

export default HomeContextProvider;

export function useHomeDispatchContext() {
  const dispatch = useContext(HomeDispatchContext);
  if (!dispatch) throw new Error('error on useDispatchContext');
  return dispatch;
}

export function useHomeStateContext() {
  const state = useContext(HomeStateContext);
  if (!state) throw new Error('error on useDispatchContext');
  return state;
}

export function useHomeContext(): [State, Dispatch] {
  const state = useContext(HomeStateContext);
  const dispatch = useContext(HomeDispatchContext);
  if (!state || !dispatch) throw new Error('error on useHomeContext');
  return [state, dispatch];
}
