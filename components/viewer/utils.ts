import {
  AlgorithmClass, AlgorithmName,
  algorithmNames,
  BUBBLE_SORT,
  INSERTION_SORT,
  SELECTION_SORT,
} from '../../utils/algorithms';
import styles from './viewer.module.scss';

export const getVisualizerBarClasses = (
    sorter: AlgorithmClass | null,
    algorithmName: AlgorithmName,
    index: number,
) : Record<string, boolean> => {
  let sort: AlgorithmClass;

  let classes: Record<string, boolean> = {
    [styles.done]: sorter?.done as boolean,
  };

  if (!sorter) return {};

  switch (algorithmName) {
    case algorithmNames.BUBBLE_SORT:
      sort = sorter as BUBBLE_SORT;
      classes = {
        ...classes,
        [styles['highlight-1']]: index === sort?.leftIndex,
        [styles['highlight-2']]: index === sort?.rightIndex,
        [styles['highlight-3']]: index === sort?.lastIndex,
        [styles.sorted]: index > sort?.lastIndex,
      };
      break;

    case algorithmNames.SELECTION_SORT:
      sort = sorter as SELECTION_SORT;
      classes = {
        ...classes,
        [styles['highlight-1']]: index === sort?.startIndex,
        [styles['highlight-2']]: index === sort?.currentMinIndex,
        [styles['highlight-3']]: index === sort?.scanIndex,
        [styles.sorted]: index < sort?.startIndex,
      };
      break;

    case algorithmNames.INSERTION_SORT:
      sort = sorter as INSERTION_SORT;
      classes = {
        ...classes,
        [styles['highlight-1']]: index === sort?.startIndex,
        [styles['highlight-3']]: index === sort?.scanIndex,
        [styles.sorted]: index < sort?.startIndex,
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
    [styles.sorted]: 'Sorted indexes',
    [styles.done]: 'Done',
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
        [styles['highlight-2']]: 'Current min index',
        [styles['highlight-3']]: 'Scan index',
        ...legends,
      };
      break;

    case algorithmNames.INSERTION_SORT:
      legends = {
        [styles['highlight-1']]: 'Start index',
        [styles['highlight-3']]: 'Scan index',
        ...legends,
      };
      break;

    default:
      break;
  }

  return legends;
};
