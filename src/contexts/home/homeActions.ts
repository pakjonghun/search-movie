type Actions = 'TOGGLEFILTER' | 'TOGGLECONTENT' | 'SELECTGENRE' | 'CLEANGENRE' | 'ADDPOPULARITY';

export const ACTIONS = {
  TOGGLEFILTER: { type: 'TOGGLEFILTER' as Actions },
  TOGGLECONTENT: (payload: boolean) => ({ type: 'TOGGLECONTENT' as Actions, payload }),
  SELECTGENRE: (payload: string) => ({ type: 'SELECTGENRE' as Actions, payload }),
  CLEANGENRE: (payload: string) => ({ type: 'CLEANGENRE' as Actions, payload }),
  ADDPOPULARITY: (payload: number) => ({ type: 'ADDPOPULARITY' as Actions, payload }),
};
