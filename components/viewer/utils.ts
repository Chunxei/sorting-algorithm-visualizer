import {
  AlgorithmClass, AlgorithmName,
  algorithmNames,
  BUBBLE_SORT,
  INSERTION_SORT,
  SELECTION_SORT,
} from '../../utils/algorithms';
import styles from './viewer.module.scss';
import {QUICKSORT} from '../../utils/algorithms/quick-sort';

export const getVisualizerBarClasses = (
    sorter: AlgorithmClass | null,
    algorithmName: AlgorithmName,
    index: number,
) : Record<string, boolean> => {
  let sort: AlgorithmClass;

  /* express initialization */
  let [
    leftIndex, rightIndex, lastIndex, startIndex, currentMinIndex,
    lowIndex, scanIndex, partitionIndex, pivotIndex,
  ] = [] as number[];

  let classes: Record<string, boolean> = {
    [styles.done]: sorter?.done as boolean,
  };

  if (!sorter) return {};

  switch (algorithmName) {
    case algorithmNames.BUBBLE_SORT:
      sort = sorter as BUBBLE_SORT;
      [leftIndex, rightIndex, lastIndex] = sort.indexes;
      classes = {
        ...classes,
        [styles['highlight-1']]: index === leftIndex,
        [styles['highlight-2']]: index === rightIndex,
        [styles['highlight-3']]: index === lastIndex,
        [styles.sorted]: index > lastIndex,
      };
      break;

    case algorithmNames.SELECTION_SORT:
      sort = sorter as SELECTION_SORT;
      [startIndex, currentMinIndex, scanIndex] = sort.indexes;
      classes = {
        ...classes,
        [styles['highlight-1']]: index === startIndex,
        [styles['highlight-2']]: index === currentMinIndex,
        [styles['highlight-3']]: index === scanIndex,
        [styles.sorted]: index < startIndex && index < currentMinIndex,
      };
      break;

    case algorithmNames.INSERTION_SORT:
      sort = sorter as INSERTION_SORT;
      [startIndex, scanIndex] = sort.indexes;
      classes = {
        ...classes,
        [styles['highlight-2']]: index === startIndex,
        [styles['highlight-1']]: index === scanIndex,
        [styles.sorted]: index < startIndex,
      };
      break;

    case algorithmNames.QUICKSORT:
      sort = sorter as QUICKSORT;
      [lowIndex, scanIndex, partitionIndex, pivotIndex] = sort.indexes;

      classes = {
        ...classes,
        [styles['highlight-0']]: index === lowIndex,
        [styles['highlight-1']]: index === scanIndex,
        [styles['highlight-2']]: index === partitionIndex,
        [styles['highlight-3']]: index === pivotIndex,
        [styles.sorted]: sort?.done,
      };
      break;

    default:
      break;
  }

  return classes;
};

export const getVisualizerLegends = (
    algorithmName: AlgorithmName,
) : Record<string, string> => {
  let legends: Record<string, string> = {
    [styles['highlight-default']]: 'Unsorted indexes',
    [styles.sorted]: 'Sorted indexes',
    // [styles.done]: 'Done',
  };

  switch (algorithmName) {
    case algorithmNames.BUBBLE_SORT:
      legends = {
        [styles['highlight-1']]: 'Left index',
        [styles['highlight-2']]: 'Right index',
        [styles['highlight-3']]: 'Last index',
        ...legends,
      };
      break;

    case algorithmNames.SELECTION_SORT:
      legends = {
        [styles['highlight-1']]: 'Start index',
        [styles['highlight-2']]: 'Min index',
        [styles['highlight-3']]: 'Scan index',
        ...legends,
      };
      break;

    case algorithmNames.INSERTION_SORT:
      legends = {
        [styles['highlight-2']]: 'Start index',
        [styles['highlight-1']]: 'Scan index',
        ...legends,
      };
      break;

    case algorithmNames.QUICKSORT:
      legends = {
        [styles['highlight-0']]: 'Low index',
        [styles['highlight-1']]: 'Scan index',
        [styles['highlight-2']]: 'Partition index',
        [styles['highlight-3']]: 'Pivot index, High index',
        ...legends,
      };
      break;

    default:
      break;
  }

  return legends;
};
