import {
  AlgorithmInfo,
  ArrayEntry,
} from './types';
import {algorithmNames} from './index';
import {ARRAY_SORT} from './array-sort';
import {quickSortAnnotations as notes} from './annotations';

/**
 * Creates a new SELECTION_SORT
 * @class
 * */
export class QUICKSORT extends ARRAY_SORT {
  public name = algorithmNames.QUICKSORT;

  /**
   * @param {ArrayEntry[]} array - the array to be sorted
   * @constructs {SELECTION_SORT}
   * */
  constructor(array: ArrayEntry[]) {
    super(array);
    this._sortIntoStages();
    this._updateStageArray([-1, -1, -1, -1], notes[9]);
  }

  /**
   * Partition function.
   * Sorts subarray elements around a pivot by comparing their values to it
   *
   * @param {number} lowIndex - the lower bound of the subarray to sort
   * @param {number} highIndex - the upper bound of the subarray to sort
   * @return {number}
   * */
  private _partition(lowIndex: number, highIndex: number): number {
    const pivot = this._array[highIndex];

    let partitionIndex = lowIndex;
    let scanIndex;

    for (scanIndex = lowIndex; scanIndex < highIndex; scanIndex++) {
      this._updateStageArray(
          [lowIndex, scanIndex, partitionIndex, highIndex],
          /* add more info to the note if scanIndex++ happened in this step */
          (scanIndex === lowIndex ?
            '' : 'Advance <code>scanIndex</code>.<br/>') + notes[2],
      );

      if (this._array[scanIndex].value < pivot.value) {
        let note4Prefix = '';

        if (scanIndex !== partitionIndex) {
          this._swap(scanIndex, partitionIndex);
          this._updateStageArray(
              [lowIndex, scanIndex, partitionIndex, highIndex],
              notes[3],
          );
        } else {
          note4Prefix = `
          Since <code>array[scanIndex] < array[pivotIndex]</code>,
          `;
        }

        this._updateStageArray(
            [lowIndex, scanIndex, partitionIndex + 1, highIndex],
            note4Prefix + notes[4],
        );

        partitionIndex++;
      }
    }

    this._updateStageArray(
        [lowIndex, scanIndex, partitionIndex, highIndex],
        notes[5],
    );

    this._swap(partitionIndex, highIndex);

    this._updateStageArray(
        [lowIndex, highIndex, highIndex, partitionIndex],
        notes[6],
    );

    return partitionIndex;
  }

  /**
   * Quick Sort algorithm function.
   * Populates this._stageArray with the array at each step
   *
   * @param {number} lowIndex - the lower bound of the subarray to sort
   * @param {number} highIndex - the upper bound of the subarray to sort
   * */
  protected _sortIntoStages(
      lowIndex = 0,
      highIndex = this._array.length - 1,
  ): void {
    if (lowIndex === 0 && highIndex === this._array.length - 1) {
      // initialize bars and explanation
      this._updateStageArray([-1, -1, -1, -1], '');
      this._updateStageArray([-1, -1, -1, -1], notes[0]);
    }

    if (lowIndex < highIndex) {
      this._updateStageArray(
          [lowIndex, lowIndex, lowIndex, highIndex],
          notes[1],
      );
      const partitionIndex = this._partition(lowIndex, highIndex);
      const highIndex2 = partitionIndex - 1;
      const lowIndex2 = partitionIndex + 1;

      this._updateStageArray(
          [lowIndex, lowIndex, lowIndex, highIndex2],
          notes[7],
      );
      this._sortIntoStages(lowIndex, highIndex2);

      this._updateStageArray(
          [lowIndex2, lowIndex2, lowIndex2, highIndex],
          notes[8],
      );
      this._sortIntoStages(lowIndex2, highIndex);
    }

    /* final stage array entry is set in the constructor, after calling
     * this._sortIntoStages()
    */
  }
}

export const quickSortInfo: AlgorithmInfo = {
  description: `Quicksort is an in-place sorting algorithm
  in which <code>array</code> is recursively split at <code>pivotIndex</code>
  into two <code>subarray</code>s, and the resulting <code>subarray</code>s
  are recursively split as well, etc. The next index
  of <code>pivotIndex</code> in the next recursion
  is determined by iteratively moving all the current recursion's
  <code>subarray</code> elements which are lower than
  <code>array[pivotIndex]</code> to the left side of <code>subarray</code>,
  updating <code>partitionIndex</code> to match the index (plus 1) of the
  rightmost member of the moved elements.
  After each iteration is complete, <code>pivotIndex = partitionIndex</code>
  occurs.
  <em>This entire process is repeated till <code>array</code>
  is fully sorted</em>.
`,

  complexity: {
    time: 'O(n<sup>2</sup>)',
    space: 'O(log(n))',
  },

  references: [
    {
      title: 'Wikipedia',
      link: 'https://en.wikipedia.org/wiki/Quicksort',
    },
    {
      title: 'Github',
      link: 'https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/quick-sort',
    },
  ],
};
