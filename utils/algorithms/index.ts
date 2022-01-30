import {BUBBLE_SORT} from './bubble-sort';
import {SELECTION_SORT} from './selection-sort';
export {BUBBLE_SORT, SELECTION_SORT};

export const algorithmClasses = {
  BUBBLE_SORT,
  SELECTION_SORT,
} as const;

// export type AlgorithmClass = typeof algorithmClasses[
//   keyof typeof algorithmClasses
// ];

export type AlgorithmClass = BUBBLE_SORT | SELECTION_SORT;

export const algorithmNames = {
  BUBBLE_SORT: 'BUBBLE_SORT',
  SELECTION_SORT: 'SELECTION_SORT',
} as const;

export type AlgorithmName = typeof algorithmNames[keyof typeof algorithmNames];
