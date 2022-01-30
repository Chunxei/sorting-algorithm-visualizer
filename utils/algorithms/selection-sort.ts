import {ArrayEntry, ArraySorterReturnValues} from './types';
import {algorithmNames} from './index';
import {ARRAY_SORT} from './array-sort';

/**
 * Creates a new SELECTION_SORT
 * @class
 * */
export class SELECTION_SORT extends ARRAY_SORT {
  public name = algorithmNames.SELECTION_SORT;
  readonly _array: ArrayEntry[];
  private _startIndex: number;
  private _currentMinIndex: number;
  private _scanIndex: number;

  /**
   * @param {ArrayEntry[]} array - the array to be sorted
   * @constructs {SELECTION_SORT}
   * */
  constructor(array: ArrayEntry[]) {
    super();
    this._array = array;
    this._startIndex = 0;
    this._currentMinIndex = 0;
    this._scanIndex = 0;
  }

  /**
   * Selection Sort algorithm step function.
   * Executes a single step in the sorting process.
   *
   * @return {ArraySorterReturnValues}
   * */
  sortOnce(): ArraySorterReturnValues {
    if (this._startIndex < this._array.length) {
      this._scanIndex++;

      if (this._scanIndex < this._array.length) {
        if (
          this._array[this._scanIndex].value <
          this._array[this._currentMinIndex].value
        ) {
          this._currentMinIndex = this._scanIndex;
        }
      }

      if (this._scanIndex === this._array.length - 1) {
        if (this._currentMinIndex !== this._startIndex) {
          [
            this._array[this._currentMinIndex], this._array[this._startIndex],
          ] = [
            this._array[this._startIndex], this._array[this._currentMinIndex],
          ];
        }

        this._startIndex++;
        this._currentMinIndex = this._startIndex;
        this._scanIndex = this._startIndex;
      }
    }

    return this.values;
  }

  /**
   * Selection Sort algorithm function.
   *
   * @return {ArrayEntry[]}
   * */
  sort(): ArrayEntry[] {
    for (
      this._startIndex = 0;
      this._startIndex < this._array.length;
      this._startIndex++
    ) {
      this._currentMinIndex = this._startIndex;

      for (
        this._scanIndex = this._startIndex + 1;
        this._scanIndex < this._array.length;
        this._scanIndex++
      ) {
        if (this._array[this._scanIndex] < this._array[this._currentMinIndex]) {
          this._currentMinIndex = this._scanIndex;
        }
      }

      if (this._currentMinIndex !== this._startIndex) {
        [
          this._array[this._currentMinIndex], this._array[this._startIndex],
        ] = [
          this._array[this._startIndex], this._array[this._currentMinIndex],
        ];
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
      indexes: [this._startIndex, this._currentMinIndex, this._scanIndex],
    };
  }

  /**
   * sets new values for this._leftIndex, this._rightIndex & this._lastIndex
   * in that order
   * @param {[number, number, number]} values - the ordered values to assign
   * to the indexes
   * */
  set indexes(values: [number, number, number]) {
    this._startIndex = values[0];
    this._currentMinIndex = values[1];
    this._scanIndex = values[2];
  }

  /**
   * check whether the array has been fully sorted
   * @return {boolean}
   * */
  get done(): boolean {
    return this._startIndex >= this._array.length;
  }

  /* --------ALGORITHM-SPECIFIC PROPERTIES 👇🏾 ---------- */

  /** get the leftIndex's current state
   * @return {number}
   * */
  get startIndex(): number {
    return this._startIndex;
  }

  /** set a new array
   * @param {number} index - the new value of _leftIndex
   * */
  set startIndex(index: number) {
    this._startIndex = index;
  }

  /** get the rightIndex's current state
   * @return {number}
   * */
  get currentMinIndex(): number {
    return this._currentMinIndex;
  }

  /** set a new array
   * @param {number} index - the new value of _rightIndex
   * */
  set currentMinIndex(index: number) {
    this._currentMinIndex = index;
  }

  /** get the rightIndex's current state
   * @return {number}
   * */
  get scanIndex(): number {
    return this._scanIndex;
  }

  /** set a new array
   * @param {number} index - the new value of _lastIndex
   * */
  set scanIndex(index: number) {
    this._scanIndex = index;
  }
}
