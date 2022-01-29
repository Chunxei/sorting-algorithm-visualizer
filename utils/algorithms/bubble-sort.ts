interface ReturnData {
  array: number[],
  leftIndex: number,
  rightIndex: number,
  lastIndex: number,
}

export function bubbleSort(
  array: number[],
  leftIndex: number,
  rightIndex: number,
  lastIndex: number,
) {
  if (lastIndex > 0) {
    if (array[rightIndex] < array[leftIndex]) {
      [array[leftIndex], array[rightIndex]] = [array[rightIndex], array[leftIndex]]
    }

    leftIndex++;
    rightIndex++;

    if (rightIndex > lastIndex) {
      leftIndex = 0;
      rightIndex = 1;
      lastIndex--;
    }
  }

  return {array, leftIndex, rightIndex, lastIndex} as ReturnData;
}
