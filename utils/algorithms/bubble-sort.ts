import {AlgorithmInfo, ArrayEntry} from './types';
import {algorithmNames} from './index';
import {ARRAY_SORT} from './array-sort';

/**
 * Creates a new BUBBLE_SORT
 * @class
 * */
export class BUBBLE_SORT extends ARRAY_SORT {
  public name = algorithmNames.BUBBLE_SORT;

  /**
   * @param {ArrayEntry[]} array - the array to be sorted
   * @constructs {BUBBLE_SORT}
   * */
  constructor(array: ArrayEntry[]) {
    super(array);
    this._sortIntoStages();
  }

  /**
   * Bubble Sort algorithm function.
   * Populates this._stageArray with the array at each step
   * */
  protected _sortIntoStages(): void {
    this.annotations = [];

    let leftIndex = 0;
    let rightIndex = 1;
    let lastIndex = this._array.length - 1;

    while (lastIndex > 0) {
      this._updateStageArray([
        leftIndex,
        rightIndex,
        lastIndex,
      ]);

      if (
        this._array[leftIndex].value >
        this._array[rightIndex].value
      ) {
        /* swap entries */
        this._swap(leftIndex, rightIndex);

        this._updateStageArray([
          leftIndex,
          rightIndex,
          lastIndex,
        ]);
      }

      leftIndex++;
      rightIndex++;

      if (rightIndex > lastIndex) {
        leftIndex = 0;
        rightIndex = 1;
        lastIndex--;
      }
    }
  }
}

export const bubbleSortInfo: AlgorithmInfo = {
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
      link: 'https://en.wikipedia.org/wiki/Bubble_sort',
    },
    {
      title: 'Github',
      link: 'https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort',
    },
  ],
};
