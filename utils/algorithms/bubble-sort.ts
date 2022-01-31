import {AlgorithmInfo, ArrayEntry, ArraySorterReturnValues} from './types';
import {algorithmNames} from './index';
import {ARRAY_SORT} from './array-sort';

/**
 * Creates a new BUBBLE_SORT
 * @class
 * */
export class BUBBLE_SORT extends ARRAY_SORT {
  public name = algorithmNames.BUBBLE_SORT;
  public annotation = '';
  readonly _array: ArrayEntry[];
  private _leftIndex: number;
  private _rightIndex: number;
  private _lastIndex: number;

  /**
   * @param {ArrayEntry[]} array - the array to be sorted
   * @constructs {BUBBLE_SORT}
   * */
  constructor(array: ArrayEntry[]) {
    super();
    this._array = array;
    this._leftIndex = 0;
    this._rightIndex = 1;
    this._lastIndex = array.length - 1;
  }

  /**
   * Bubble Sort algorithm step function.
   * Executes a single step in the sorting process,
   * and annotates it.
   *
   * @return {ArraySorterReturnValues}
   * */
  sortOnce(): ArraySorterReturnValues {
    if (this._lastIndex > 0) {
      if (
        this._array[this._leftIndex].value >
        this._array[this._rightIndex].value
      ) {
        /* swap entries */
        [
          this._array[this._leftIndex], this._array[this._rightIndex],
        ] = [
          this._array[this._rightIndex], this._array[this._leftIndex],
        ];

        this.annotation = `array[leftIndex] > array[rightIndex],
          therefore SWAP.`;
      } else {
        this._leftIndex++;
        this._rightIndex++;

        this.annotation = `array[leftIndex] < array[rightIndex],
          therefore ADVANCE.`;
      }

      if (this._rightIndex > this._lastIndex) {
        this._leftIndex = 0;
        this._rightIndex = 1;
        this._lastIndex--;

        this.annotation = `End of the unsorted portion of the array
          reached, therefore RESET indexes and DECREMENT the last index.`;
      }
    }

    if (this._lastIndex < 1) {
      this.annotation = 'Array fully sorted, therefore END.';
    }

    return this.values;
  }

  /**
   * Bubble Sort algorithm function.
   *
   * @return {ArrayEntry[]}
   * */
  sort(): ArrayEntry[] {
    this.annotation = '';
    this._leftIndex = 0;
    this._rightIndex = 1;
    this._lastIndex = this._array.length - 1;

    while (this._lastIndex > 0) {
      if (
        this._array[this._leftIndex].value >
        this._array[this._rightIndex].value
      ) {
        /* swap entries */
        [
          this._array[this._leftIndex], this._array[this._rightIndex],
        ] = [
          this._array[this._rightIndex], this._array[this._leftIndex],
        ];
      }

      this._leftIndex++;
      this._rightIndex++;

      if (this._rightIndex > this._lastIndex) {
        this._leftIndex = 0;
        this._rightIndex = 1;
        this._lastIndex--;
      }
    }

    return this._array;
  }

  /**
   * get the leftIndex's current state
   * @return {ArraySorterReturnValues}
   * */
  get values(): ArraySorterReturnValues {
    return {
      array: this._array,
      indexes: [this._leftIndex, this._rightIndex, this._lastIndex],
    };
  }

  /**
   * sets new values for this._leftIndex, this._rightIndex & this._lastIndex
   * in that order
   * @param {[number, number, number]} values - the ordered values to assign
   * to the indexes
   * */
  set indexes(values: [number, number, number]) {
    this._leftIndex = values[0];
    this._rightIndex = values[1];
    this._lastIndex = values[2];
  }

  /**
   * check whether the array has been fully sorted
   * @return {boolean}
   * */
  get done(): boolean {
    return this._lastIndex < 1;
  }

  /* --------ALGORITHM-SPECIFIC PROPERTIES 👇🏾 ---------- */

  /** get the leftIndex's current state
   * @return {number}
   * */
  get leftIndex(): number {
    return this._leftIndex;
  }

  /** set a new array
   * @param {number} index - the new value of _leftIndex
   * */
  set leftIndex(index: number) {
    this._leftIndex = index;
  }

  /** get the rightIndex's current state
   * @return {number}
   * */
  get rightIndex(): number {
    return this._rightIndex;
  }

  /** set a new array
   * @param {number} index - the new value of _rightIndex
   * */
  set rightIndex(index: number) {
    this._rightIndex = index;
  }

  /** get the rightIndex's current state
   * @return {number}
   * */
  get lastIndex(): number {
    return this._lastIndex;
  }

  /** set a new array
   * @param {number} index - the new value of _lastIndex
   * */
  set lastIndex(index: number) {
    this._lastIndex = index;
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
