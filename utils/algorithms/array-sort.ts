import {ArrayEntry, ArraySorterReturnValues} from './types';
import {AlgorithmName} from './index';

/**
 * Shared blueprint for array sorting algorithms
 * @abstract
 * */
export abstract class ARRAY_SORT {
  /**
   * @constructs {ARRAY_SORT}
   * */
  protected constructor() {}

  /* name of the algorithm class */
  abstract name: AlgorithmName

  /* annotation serves as the visualizer's documentation for each step */
  abstract annotation: string

  /** sorting algorithm step function */
  abstract sortOnce(): ArraySorterReturnValues

  /** sorting algorithm function */
  abstract sort(): ArrayEntry[]

  /** summary of relevant values in the sorting class */
  abstract get values(): ArraySorterReturnValues

  /** summary of relevant indexes in the sorting class */
  abstract set indexes(array: number[]);

  /** whether the sorting process is complete */
  abstract get done(): boolean
}
