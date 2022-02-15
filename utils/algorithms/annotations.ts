export const bubbleSortAnnotations: string[] = [
  /* 0 */`
  Initialize indexes.
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
  Initialize indexes.
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
  Initialize indexes.
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
