import {ArrayEntry, ArraySorterReturnValues} from './types';
import {algorithmNames} from './index';
import {ARRAY_SORT} from './array-sort';

/**
 * Creates a new BUBBLE_SORT
 * @class
 * */
export class BUBBLE_SORT extends ARRAY_SORT {
  public name = algorithmNames.BUBBLE_SORT;
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
   * Executes a single step in the sorting process.
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
      } else {
        this._leftIndex++;
        this._rightIndex++;
      }

      if (this._rightIndex > this._lastIndex) {
        this._leftIndex = 0;
        this._rightIndex = 1;
        this._lastIndex--;
      }
    }

    return this.values;
  }

  /**
   * Bubble Sort algorithm function.
   *
   * @return {ArrayEntry[]}
   * */
  sort(): ArrayEntry[] {
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
   * @param {number} leftIndex - the new value of _leftIndex
   * */
  set leftIndex(leftIndex: number) {
    this._leftIndex = leftIndex;
  }

  /** get the rightIndex's current state
   * @return {number}
   * */
  get rightIndex(): number {
    return this._rightIndex;
  }

  /** set a new array
   * @param {number} rightIndex - the new value of _rightIndex
   * */
  set rightIndex(rightIndex: number) {
    this._rightIndex = rightIndex;
  }

  /** get the rightIndex's current state
   * @return {number}
   * */
  get lastIndex(): number {
    return this._lastIndex;
  }

  /** set a new array
   * @param {number} lastIndex - the new value of _lastIndex
   * */
  set lastIndex(lastIndex: number) {
    this._lastIndex = lastIndex;
  }
}
