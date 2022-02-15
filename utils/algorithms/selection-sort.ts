import {AlgorithmInfo, ArrayEntry} from './types';
import {algorithmNames} from './index';
import {ARRAY_SORT} from './array-sort';
import {selectionSortAnnotations as notes} from './annotations';

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
    this._updateStageArray([-1, -1, -1], ''); // initialize bars and explanation

    for (let startIndex = 0; startIndex < this._array.length; startIndex++) {
      let currentMinIndex = startIndex;
      let scanIndex = startIndex;

      this._updateStageArray(
          [startIndex, currentMinIndex, scanIndex + 1],
          notes[0],
      );

      for (
        scanIndex = startIndex + 1;
        scanIndex < this._array.length;
        scanIndex++
      ) {
        this._updateStageArray(
            [startIndex, currentMinIndex, scanIndex],
            notes[1],
        );

        if (
          this._array[scanIndex]?.value <
          this._array[currentMinIndex]?.value
        ) {
          currentMinIndex = scanIndex;

          this._updateStageArray(
              [startIndex, currentMinIndex, scanIndex],
              notes[2],
          );
        }
      }

      this._updateStageArray(
          [startIndex, currentMinIndex, scanIndex],
          notes[3],
      );

      if (currentMinIndex !== startIndex) {
        this._swap(currentMinIndex, startIndex);

        this._updateStageArray(
            [currentMinIndex, startIndex, scanIndex],
            notes[4],
        );
      } else {
        this._updateStageArray(
            [startIndex, currentMinIndex, scanIndex],
            notes[5],
        );
      }
    }

    this._updateStageArray([-1, -1, -1], notes[6]);
  }
}

export const selectionSortInfo: AlgorithmInfo = {
  description: `<code>startIndex</code> is assigned the
    first index in the unsorted portion of <code>array</code>, and
    <code>minIndex = startIndex</code>,
    <code>scanIndex = startIndex + 1</code>. <code>scanIndex</code>
    is then iterated over <code>array</code>, and if at any point
    <code>array[scanIndex] < array[minIndex] === true</code>,
    then <code>minIndex = scanIndex</code>.
    When <code>scanIndex</code> reaches the end of <code>array</code>,
    <code>array[minIndex]</code> and <code>array[startIndex]</code> are
    <strong>swapped</strong> (only necessary if 
    <code>minIndex !== startIndex</code>).
    Finally, <code>startIndex++</code> occurs.
    <em>This entire process is repeated till <code>array</code>
    is fully sorted</em>.
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
