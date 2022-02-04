import {BUBBLE_SORT, bubbleSortInfo} from './bubble-sort';
import {SELECTION_SORT, selectionSortInfo} from './selection-sort';
import {INSERTION_SORT, insertionSortInfo} from './insertion-sort';
import {QUICKSORT, quickSortInfo} from './quick-sort';
import {AlgorithmInfo} from './types';
export {BUBBLE_SORT, SELECTION_SORT, INSERTION_SORT};

export const algorithmClasses = {
  BUBBLE_SORT,
  SELECTION_SORT,
  INSERTION_SORT,
  QUICKSORT,
} as const;

// export type AlgorithmClass = typeof algorithmClasses[
//   keyof typeof algorithmClasses
// ];

export type AlgorithmClass = BUBBLE_SORT
  | SELECTION_SORT | INSERTION_SORT | QUICKSORT;

export const algorithmNames = {
  BUBBLE_SORT: 'BUBBLE_SORT',
  SELECTION_SORT: 'SELECTION_SORT',
  INSERTION_SORT: 'INSERTION_SORT',
  QUICKSORT: 'QUICKSORT',
} as const;

export type AlgorithmName = typeof algorithmNames[keyof typeof algorithmNames];

export const algorithmDetails: Record<AlgorithmName, AlgorithmInfo> = {
  BUBBLE_SORT: bubbleSortInfo,
  SELECTION_SORT: selectionSortInfo,
  INSERTION_SORT: insertionSortInfo,
  QUICKSORT: quickSortInfo,
};
