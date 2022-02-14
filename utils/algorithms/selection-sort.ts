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
  description: `Selection sort iterates through <code>array</code>,
    each time finding the the index of the lowest value in the unsorted
    portion of <code>array</code> (<code>minIndex</code>), and swaps
    its value with the value at the first index of the unsorted
    portion of the <code>array</code> (<code>startIndex</code>).
  `,

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
