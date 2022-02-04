import {AlgorithmInfo, ArrayEntry, ArraySorterReturnValues} from './types';
import {algorithmNames} from './index';
import {ARRAY_SORT} from './array-sort';

/**
 * Creates a new INSERTION_SORT
 * @class
 * */
export class INSERTION_SORT extends ARRAY_SORT {
  public name = algorithmNames.INSERTION_SORT;

  /**
   * @param {ArrayEntry[]} array - the array to be sorted
   * @constructs {INSERTION_SORT}
   * */
  constructor(array: ArrayEntry[]) {
    super(array);
    this._sortIntoStages();
  }


  /**
   * Insertion Sort algorithm function.
   * Populates this._stageArray with the array at each step
   * */
  protected _sortIntoStages(): void {
    for (
      let startIndex = 0;
      startIndex < this._array.length - 1;
      startIndex++
    ) {
      let scanIndex = startIndex + 1;

      this._updateStageArray([
        startIndex,
        scanIndex,
      ]);

      while (
        this._array[scanIndex]?.value <
        this._array[scanIndex - 1]?.value
      ) {
        this._swap(scanIndex, scanIndex - 1);
        scanIndex--;

        this._updateStageArray([
          startIndex + 1,
          scanIndex,
        ]);
      }
    }
  }
}

export const insertionSortInfo: AlgorithmInfo = {
  description: `Bubble sort compares the value at the left index
    against the value at the right index in each step. If the value
    at the left index is greater than the value at the right index,
    the values at both indexes are SWAPPED, and the indexes are
    incremented. This is repeated until the greatest value in the
    array is moved to the end of the unsorted portion of the array,
    which is marked by the last index, and then the process is repeated.`,

  complexity: {
    time: 'O(n<sup>2</sup>)',
    space: 'O(1)',
  },

  references: [
    {
      title: 'Wikipedia',
      link: 'http://en.wikipedia.org/wiki/Insertion_sort',
    },
    {
      title: 'Github',
      link: 'https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort',
    },
  ],
};
