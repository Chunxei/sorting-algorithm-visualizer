import {AlgorithmInfo, ArrayEntry} from './types';
import {algorithmNames} from './index';
import {ARRAY_SORT} from './array-sort';

/**
 * Creates a new SELECTION_SORT
 * @class
 * */
export class SELECTION_SORT extends ARRAY_SORT {
  public name = algorithmNames.SELECTION_SORT;

  /**
   * @param {ArrayEntry[]} array - the array to be sorted
   * @constructs {SELECTION_SORT}
   * */
  constructor(array: ArrayEntry[]) {
    super(array);
    this._sortIntoStages();
  }

  /**
   * Selection Sort algorithm function.
   * Populates this._stageArray with the array at each step
   * */
  protected _sortIntoStages(): void {
    for (
      let startIndex = 0;
      startIndex < this._array.length;
      startIndex++
    ) {
      let currentMinIndex = startIndex;
      let scanIndex = startIndex;
      this._updateStageArray([
        startIndex,
        currentMinIndex,
        scanIndex,
      ]);

      for (
        scanIndex = startIndex + 1;
        scanIndex < this._array.length;
        scanIndex++
      ) {
        this._updateStageArray([
          startIndex,
          currentMinIndex,
          scanIndex,
        ]);

        if (
          this._array[scanIndex]?.value <
          this._array[currentMinIndex]?.value
        ) {
          currentMinIndex = scanIndex;

          this._updateStageArray([
            startIndex,
            currentMinIndex,
            scanIndex,
          ]);
        }
      }

      if (currentMinIndex !== startIndex) {
        this._swap(currentMinIndex, startIndex);

        this._updateStageArray([
          startIndex,
          currentMinIndex,
          scanIndex,
        ]);
      }
    }
  }
}

export const selectionSortInfo: AlgorithmInfo = {
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
      link: 'https://en.wikipedia.org/wiki/Selection_sort',
    },
    {
      title: 'Github',
      link: 'https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/selection-sort',
    },
  ],
};
