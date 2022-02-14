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

    this._updateStageArray([leftIndex, rightIndex, lastIndex], '');

    while (lastIndex > 0) {
      this._updateStageArray([leftIndex, rightIndex, lastIndex], `
        Check to see if <code>array[leftIndex] > array[rightIndex]</code>.
      `);

      if (this._array[leftIndex].value > this._array[rightIndex].value) {
        /* swap entries */
        this._swap(leftIndex, rightIndex);

        this._updateStageArray([rightIndex, leftIndex, lastIndex], `
          <code>array[leftIndex] > array[rightIndex] === true</code>,
          therefore the values at those indexes are <strong>swapped</strong>.
        `);
      }

      leftIndex++;
      rightIndex++;

      if (rightIndex > lastIndex) {
        this._updateStageArray([leftIndex, rightIndex, lastIndex], `
          The end of the unsorted portion of the array
          (marked by <code>lastIndex</code>) has been reached.
          Therefore <strong>reset</strong> the positions of
          <code>leftIndex</code> and <code>rightIndex</code>,
          and decrement <code>lastIndex</code> by <code>1</code>.
        `);

        leftIndex = 0;
        rightIndex = 1;
        lastIndex--;
      }
    }

    this._updateStageArray([leftIndex, rightIndex, lastIndex], `
      <code>array</code> fully sorted!
    `);
  }
}

export const bubbleSortInfo: AlgorithmInfo = {
  description: `Bubble sort compares the <code>array</code> value at
    <code>leftIndex</code> against the value at <code>rightIndex</code>
    in each step. If the value at <code>leftIndex</code> is greater
    than the value at <code>rightIndex</code>, the values at both indexes
    themselves are <strong>swapped</strong>, and the indexes are incremented
    by <code>1</code>. This is repeated until the greatest value in
    <code>array</code> is moved to the end of the unsorted portion of
    <code>array</code>, which is marked by <code>lastIndex</code>.
    <em>This entire process is repeated till the array is fully sorted</em>.
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

