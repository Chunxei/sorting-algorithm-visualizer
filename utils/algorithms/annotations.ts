export const bubbleSortAnnotations: string[] = [
  /* 0 */`
  <strong>Initialize</strong> indexes.
  <br />
  <code>leftIndex = 0</code>
  <br />
  <code>rightIndex = leftIndex + 1</code>
  <br />
  <code>lastIndex = array.length - 1</code>
  `,

  /* 1 */`
  Check if <code>array[leftIndex] > array[rightIndex]</code>.
  `,

  /* 2 */`
  <code>array[leftIndex] > array[rightIndex] === true</code>,
  therefore <code>array[leftIndex]</code> and
  <code>array[rightIndex]</code> are <strong>swapped</strong>.
  `,

  /* 3 */`
  The end of the unsorted portion of <code>array</code>
  (marked by <code>lastIndex</code>) has been reached.
  `,

  /* 4 */`
  <strong>Reset</strong> <code>leftIndex = 0</code>
  and <code>rightIndex = 1</code>, update <code>lastIndex--</code>.
  `,

  /* 5 */`
  <code>array</code> fully sorted!
  `,
];

export const selectionSortAnnotations: string[] = [
  /* 0 */`
  <strong>Initialize</strong> indexes.
  <br />
  <code>startIndex</code> = the first index in the unsorted portion
  of the array
  <br />
  <code>minIndex = startIndex</code>
  <br />
  <code>scanIndex = startIndex + 1</code>
  `,

  /* 1 */`
  Check if <code>array[scanIndex] < array[minIndex]</code>.
  `,

  /* 2 */`
  <code>array[scanIndex] < array[minIndex] === true</code>,
  therefore <strong>set</strong> <code>minIndex = scanIndex</code>.
  `,

  /* 3 */`
  <code>scanIndex</code> has reached the end of <code>array</code>.
  Check if <code>minIndex === startIndex</code>.
  `,

  /* 4 */`
  <code>minIndex !== startIndex</code>.
  Therefore <strong>swap</strong> <code>array[minIndex]</code>
  and <code>array[startIndex]</code>.
  `,

  /* 5 */`
  <code>minIndex === startIndex</code>.
  Therefore do nothing.
  `,

  /* 6 */`
  <code>array</code> fully sorted!
  `,
];

export const insertionSortAnnotations: string[] = [
  /* 0 */`
  <strong>Initialize</strong> indexes.
  <br />
  <code>startIndex = 0</code>
  <br />
  <code>scanIndex = startIndex + 1</code>
  `,

  /* 1 */`
  Check if <code>array[scanIndex] < array[scanIndex - 1]</code>.
  `,

  /* 2 */`
  <code>array[scanIndex] < array[scanIndex - 1] === true</code>,
  therefore <code>array[scanIndex]</code> and
  <code>array[scanIndex - 1]</code> are <strong>swapped</strong>.
  `,

  /* 3 */`
  <code>array[scanIndex] < array[scanIndex - 1] === false</code>,
  therefore <code>scanIndex = startIndex + 1</code> <strong>occurs</strong>.
  `,

  /* 4 */`
  <code>array</code> fully sorted!
  `,
];

export const quickSortAnnotations: string[] = [
  /* 0 */`
  <strong>Initialize</strong> <code>array</code> indexes.
  <br />
  <code>lowIndex = 0</code>
  <br />
  <code>highIndex = array.length - 1</code>
  `,

  /* 1 */`
  <strong>Define</strong> <code>subarray</code> range, where
  <code>lowIndex &leq; subarray indexes &leq; highIndex</code>
  in <code>array</code>.
  <strong>Initialize</strong> instrumental <code>subarray</code> indexes,
  setting their values set as <code>scanIndex = lowIndex</code>,
  <code>partitionIndex = lowIndex</code>, and
  <code>pivotIndex = highIndex</code>. In the next steps,
  <code>scanIndex</code> will be <strong>iterated</strong> over
  <code>subarray</code>, triggering swaps if certain conditions are met,
  and setting the final value of <code>partitionIndex</code>, which will
  be used to determine the next value of <code>pivotIndex</code>.
  `,

  /* 2 */`
  Advance <code>scanIndex</code>.
  Check if <code>array[scanIndex] < array[pivotIndex]</code>.
  `,

  /* 3 */`
  <code>array[scanIndex] < array[pivotIndex] === true</code>,
  therefore <code>array[scanIndex]</code> and
  <code>array[partitionIndex]</code> are <strong>swapped</strong>.
  `,

  /* 4 */`
  <code>partitionIndex++</code> occurs, marking the boundary between
  <code>subarray</code> elements (those visited by
  <code>scanIndex</code>) which are less than <code>array[pivotIndex]</code>,
  and those which are greater (as well as unvisited elements).
  `,

  /* 5 */`
  <code>scanIndex === pivotIndex</code>, therefore every <code>subarray</code>
  entry to the left of <code>subarray</code> is less than
  <code>pivotIndex</code>.
  `,

  /* 6 */`
  <code>array[pivotIndex]</code> and
  <code>array[partitionIndex]</code> are <strong>swapped</strong>.
  `,

  /* 7 */`
  <strong>Initialize</strong> <code>subarray</code> border indexes.
  <br />
  <code>lowIndex = lowIndex (from a previous recursion)</code>
  <br />
  <code>highIndex = partitionIndex - 1 (from a previous recursion)</code>
  `,

  /* 8 */`
  <strong>Initialize</strong> <code>subarray</code> border indexes.
  <br />
  <code>lowIndex = partitionIndex - 1 (from a previous recursion)</code>
  <br />
  <code>highIndex = highIndex (from a previous recursion)</code>
  `,

  /* 9 */`
  <code>array</code> fully sorted!
  `,
];
