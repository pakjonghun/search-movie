export type PopularityProgressBarType = 'percent' | 'base' | 'hide';
export type ProgressWithArgs = { barType: PopularityProgressBarType; path: string };
export type Genre = { id: number; name: string };
export type ContentType = 'tv' | 'movie';
export type CheckIsSelectedPopularityArgs = { popularity: number; path: string };
