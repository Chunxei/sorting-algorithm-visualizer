import {AlgorithmInfo, ArrayEntry} from './types';
import {algorithmNames} from './index';
import {ARRAY_SORT} from './array-sort';
import {bubbleSortAnnotations as notes} from './annotations';

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
    let leftIndex = 0;
    let rightIndex = 1;
    let lastIndex = this._array.length - 1;

    // initialize bars and explanation
    this._updateStageArray([-1, -1, this._array.length], '');

    this._updateStageArray([leftIndex, rightIndex, lastIndex], notes[0]);

    while (lastIndex > 0) {
      this._updateStageArray([leftIndex, rightIndex, lastIndex], notes[1]);

      if (this._array[leftIndex].value > this._array[rightIndex].value) {
        /* swap entries */
        this._swap(leftIndex, rightIndex);

        this._updateStageArray([rightIndex, leftIndex, lastIndex], notes[2]);
      }

      leftIndex++;
      rightIndex++;

      if (rightIndex > lastIndex) {
        this._updateStageArray([leftIndex, rightIndex, lastIndex], notes[3]);

        leftIndex = 0;
        rightIndex = 1;
        lastIndex--;

        this._updateStageArray([leftIndex, rightIndex, lastIndex], notes[4]);
      }
    }

    this._updateStageArray([leftIndex, rightIndex, lastIndex], notes[5]);
  }
}

export const bubbleSortInfo: AlgorithmInfo = {
  description: `<code>leftIndex = 0</code> and
    <code>rightIndex = leftIndex + 1</code> are
    <strong>simultaneously iterated</strong>
    over <code>array</code>. If
    <code>array[leftIndex] > array[rightIndex] === true</code>
    at any point during this,
    then <code>array[leftIndex]</code> and <code>array[leftIndex]</code>
    are <strong>swapped</strong>.
    This continues until the greatest value in the unsorted portion of
    <code>array</code> is moved all the way to <code>lastIndex</code>
    (the last index in the unsorted portion of <code>array</code>), after
    which <code>lastIndex--</code> occurs.
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
      link: 'https://en.wikipedia.org/wiki/Bubble_sort',
    },
    {
      title: 'Github',
      link: 'https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort',
    },
  ],
};

