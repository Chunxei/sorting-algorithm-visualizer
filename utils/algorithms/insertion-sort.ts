import {AlgorithmInfo, ArrayEntry} from './types';
import {algorithmNames} from './index';
import {ARRAY_SORT} from './array-sort';
import {insertionSortAnnotations as notes} from './annotations';

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
    this._updateStageArray([-1, -1], ''); // initialize bars and explanation

    this._updateStageArray([0, 1], notes[0]); // initialize bars and explanation

    for (
      let startIndex = 0;
      startIndex < this._array.length - 1;
      startIndex++
    ) {
      let scanIndex = startIndex + 1;

      this._updateStageArray([startIndex, scanIndex], notes[1]);

      while (
        this._array[scanIndex]?.value <
        this._array[scanIndex - 1]?.value
      ) {
        this._swap(scanIndex, scanIndex - 1);
        scanIndex--;

        this._updateStageArray([startIndex + 1, scanIndex], notes[2]);
      }

      if (scanIndex !== startIndex + 1) {
        this._updateStageArray([startIndex + 1, startIndex + 2], notes[3]);
      }
    }

    this._updateStageArray(
        [this._array.length, this._array.length + 2],
        notes[4],
    );
  }
}

export const insertionSortInfo: AlgorithmInfo = {
  description: `<code>startIndex = 0</code> and
    <code>scanIndex = startIndex + 1</code> are
    <strong>simultaneously iterated</strong>
    over <code>array</code>. If
    <code>array[scanIndex] < array[scanIndex - 1] === true</code>
    at any point during this,
    then <code>array[scanIndex]</code> and <code>array[scanIndex - 1]</code>
    are <strong>swapped</strong>, and <code>scanIndex--</code> occurs.
    This step is repeated for as long as
    <code>array[scanIndex] < array[scanIndex - 1] === true</code>. Otherwise,
    <code>scanIndex</code> is reset to <code>scanIndex = startIndex + 1</code>.
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
      link: 'http://en.wikipedia.org/wiki/Insertion_sort',
    },
    {
      title: 'Github',
      link: 'https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort',
    },
  ],
};
