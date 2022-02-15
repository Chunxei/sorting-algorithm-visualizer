import {ArrayEntry, ArraySorterReturnValues} from './types';
import {AlgorithmName, algorithmNames} from './index';

/**
 * Shared blueprint for array sorting algorithms
 * @abstract
 * */
abstract class ABSTRACT_SORT {
  /**
   * @constructs {ARRAY_SORT}
   * */
  protected constructor() {}

  /** The name of the algorithm class */
  abstract name: AlgorithmName

  /**  the array to sort in place */
  protected abstract _array: ArrayEntry[]
  protected abstract _stageArray: ArraySorterReturnValues[]
  protected abstract _stageIndex: number

  /**
  * Adds a new stage to the stage array, with indexes for bar highlighting
  * and optionally an annotation explaining the step taken at that stage
  */
  protected abstract _updateStageArray(
    indexes: number[],
    annotation?: string
  ): void


  /** Swaps the values at the specified indexes. */
  protected abstract _swap(index1: number, index2: number): void

  /**
   * Sorting algorithm function.
   * Populates the stage array with the new state of the array at each step.
   * */
  protected abstract _sortIntoStages(...args: any[]): void

  /**
  * Sort the array up to a specified stage index, and return the result.
  */
  abstract sortAt(stageIndex: number): ArraySorterReturnValues

  /** Perform one step forward in the sorting process */
  abstract sortOnce(): ArraySorterReturnValues

  /** Perform one step backward in the sorting process */
  abstract unsortOnce(): ArraySorterReturnValues

  /** Get summary of relevant values in the sorting class
   * at the current stage index
   * */
  abstract get values(): ArraySorterReturnValues

  /** Update relevant indexes in the sorting class */
  abstract set indexes(array: number[]);

  /** Get relevant indexes in the sorting class */
  abstract get indexes(): number[];

  /** Check whether the sorting process is complete */
  abstract get done(): boolean;
}

/**
 * Creates a new ARRAY_SORT
 * @class
 * */
export class ARRAY_SORT extends ABSTRACT_SORT {
  /* NOTE: THIS IS A PLACEHOLDER. SUBCLASSES SHOULD SET THEIR OWN NAMES */
  public name: AlgorithmName = algorithmNames.BUBBLE_SORT;
  public annotations: string[];
  protected readonly _array: ArrayEntry[];
  protected _stageArray: ArraySorterReturnValues[];
  protected _stageIndex: number;

  /**
   * @param {ArrayEntry[]} array - the array to be sorted
   * @constructs {ARRAY_SORT}
   * */
  protected constructor(array: ArrayEntry[]) {
    super();
    this._array = array;
    this._stageArray = [];
    this._stageIndex = 0;
    this.annotations = [];
  }

  /**
   * Adds a new stage to the stage array, optionally with the explanation
   * for that stage
   *
   * @param {number[]} indexes - the indexes to update
   * @param {string} [annotation] - the explanation for this stage in the
   * sorting process
   * */
  protected _updateStageArray(indexes: number[], annotation?: string): void {
    this._stageArray.push({
      array: [...this._array],
      indexes,
      annotation: annotation || '',
    });
  }

  /**
   * Swaps the values at the specified indexes.
   *
   * @param {number} index1 - first index to swap
   * @param {number} index2 - second index to swap
   * @return {void}
   * */
  protected _swap(index1: number, index2: number): void {
    [
      this._array[index1], this._array[index2],
    ] = [
      this._array[index2], this._array[index1],
    ];
  }

  /**
   * Sorting algorithm function.
   * Populates this._stageArray with the new state of the array at each step.
   *
   * __NOTE: THIS IS A STUB. IMPLEMENT SUBCLASS-SPECIFIC LOGIC IN SUBCLASS__
   *
   * @param {any[]} args - args depending on subclass implementation
   * @return {void}
   * */
  protected _sortIntoStages(...args: any[]): void {};

  /**
   * Update this._stageIndex with the specified index and return
   * the state of this._stageArray at that index. Used to jump
   * to a specified stage.
   *
   * @param {number} stageIndex - index of the array state to return
   * @return {ArraySorterReturnValues}
   * */
  sortAt(stageIndex: number): ArraySorterReturnValues {
    this._stageIndex = Math.max(
        0,
        Math.min(this._stageArray.length - 1, stageIndex),
    );

    return this._stageArray[this._stageIndex];
  }

  /**
   * Steps forward once and returns the result.
   * Used to advance the visualization by one step.
   *
   * @return {ArraySorterReturnValues}
   * */
  sortOnce(): ArraySorterReturnValues {
    this._stageIndex += this._stageIndex === this
        ._stageArray.length - 1 ? 0 : 1;

    return this._stageArray[this._stageIndex];
  }

  /**
   * Steps backwards once and returns the result.
   * Used to reverse the visualization by one step.
   *
   * @return {ArraySorterReturnValues}
   * */
  unsortOnce(): ArraySorterReturnValues {
    this._stageIndex -= this._stageIndex === 0 ? 0 : 1;

    return this._stageArray[this._stageIndex];
  }

  /**
   * Get the relevant values used for sorting.
   * These values may vary depending on the sorting algorithm used.
   *
   * @return {ArraySorterReturnValues}
   * */
  get values(): ArraySorterReturnValues {
    return this._stageArray[this._stageIndex];
  }

  /**
   * Sets new values for the current sorting algorithm's indexes.
   * These values may vary depending on the sorting algorithm used.
   *
   * @param {[number, number, number]} values - values for the update.
   * */
  set indexes(values: number[]) {
    this._stageArray[this._stageIndex].indexes = values;
  }

  /**
   * Gets the value at the current stage index.
   * */
  get indexes(): number[] {
    return (this._stageArray?.[this._stageIndex]?.indexes || [0, 1, 2]);
  }

  /**
   * Directly update the stage index
   * @param {number} index - the new value of _stageIndex
   * */
  set stageIndex(index: number) {
    this._stageIndex = index;
  }

  /**
   * Get the current stage index
   * @return {number}
   * */
  get stageIndex(): number {
    return this._stageIndex;
  }

  /**
   * Get the number of stages in _stageArray
   * @return {number}
   * */
  get stages(): number {
    return this._stageArray.length;
  }

  /**
   * cCheck whether the array has been fully sorted
   * @return {boolean}
   * */
  get done(): boolean {
    return this._stageArray.length > 0 &&
      this._stageIndex >= this._stageArray.length - 1;
  }
}
