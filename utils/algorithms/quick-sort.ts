import {
  AlgorithmInfo,
  ArrayEntry,
} from './types';
import {algorithmNames} from './index';
import {ARRAY_SORT} from './array-sort';

/**
 * Creates a new SELECTION_SORT
 * @class
 * */
export class QUICKSORT extends ARRAY_SORT {
  public name = algorithmNames.QUICKSORT;

  /**
   * @param {ArrayEntry[]} array - the array to be sorted
   * @constructs {SELECTION_SORT}
   * */
  constructor(array: ArrayEntry[]) {
    super(array);
    this._sortIntoStages();
  }

  /**
   * Partition function.
   * Sorts subarray elements around a pivot by comparing their values to it
   *
   * @param {number} lowIndex - the lower bound of the subarray to sort
   * @param {number} highIndex - the upper bound of the subarray to sort
   * @return {number}
   * */
  private _partition(lowIndex: number, highIndex: number): number {
    const pivot = this._array[highIndex];

    let partitionIndex = lowIndex;
    let i;

    for (i = lowIndex; i < highIndex; i++) {
      this._updateStageArray([i, partitionIndex, highIndex]);

      if (this._array[i].value < pivot.value) {
        this._swap(i, partitionIndex);
        this._updateStageArray([i, partitionIndex, highIndex]);
        partitionIndex++;
      }
    }

    this._updateStageArray([i, partitionIndex, highIndex]);

    this._swap(partitionIndex, highIndex);

    this._updateStageArray([highIndex, highIndex, partitionIndex]);

    return partitionIndex;
  }

  /**
   * Quick Sort algorithm function.
   * Populates this._stageArray with the array at each step
   *
   * @param {number} lowIndex - the lower bound of the subarray to sort
   * @param {number} highIndex - the upper bound of the subarray to sort
   * */
  protected _sortIntoStages(
      lowIndex = 0,
      highIndex = this._array.length - 1,
  ): void {
    if (lowIndex < highIndex) {
      const partitionIndex = this._partition(lowIndex, highIndex);
      this._sortIntoStages(lowIndex, partitionIndex - 1);
      this._sortIntoStages(partitionIndex + 1, highIndex);
    }
  }
}

export const quickSortInfo: AlgorithmInfo = {
  description: `Quicksort compares the value at the left index
    against the value at the right index in each step. If the value
    at the left index is greater than the value at the right index,
    the values at both indexes are SWAPPED, and the indexes are
    incremented. This is repeated until the greatest value in the
    array is moved to the end of the unsorted portion of the array,
    which is marked by the last index, and then the process is repeated.`,

  complexity: {
    time: 'O(n<sup>2</sup>)',
    space: 'O(log(n))',
  },

  references: [
    {
      title: 'Wikipedia',
      link: 'https://en.wikipedia.org/wiki/Quicksort',
    },
    {
      title: 'Github',
      link: 'https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort',
    },
  ],
};
