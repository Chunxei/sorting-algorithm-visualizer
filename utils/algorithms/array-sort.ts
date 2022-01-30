import {ArrayEntry, ArraySorterReturnValues} from './types';
import {AlgorithmName} from './index';

/**
 * Blueprint for array sorting algorithms
 * @abstract
 * */
export abstract class ARRAY_SORT {
  /**
   * @constructs {ArraySort}
   * */
  protected constructor() {}

  abstract name: AlgorithmName

  /** sorting algorithm step function */
  abstract sortOnce(): ArraySorterReturnValues

  /** sorting algorithm function */
  abstract sort(): ArrayEntry[]

  abstract get values(): ArraySorterReturnValues

  abstract set indexes(array: number[]);

  abstract get done(): boolean
}
