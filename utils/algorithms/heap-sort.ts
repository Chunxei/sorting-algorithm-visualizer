class Heap {
  constructor(comparatorFn) {
    if (new.target === Heap) {
      throw new TypeError('Cannot instantiate Heap directly');
    }

    this.bucket = [];
    this.compare = comparatorFn.bind(this);
  }

  static get Min() {
    return MinHeap;
  }

  static get Max() {
    return MaxHeap;
  }

  getParentIndex(childIndex) {
    return Math.floor((childIndex - 1) / 2);
  }

  getLeftChildIndex(parentIndex) {
    return (parentIndex * 2) + 1;
  }

  getRightChildIndex(parentIndex) {
    return (parentIndex * 2) + 2;
  }

  swap(index1, index2) {
    const temp = this.bucket[index1];
    this.bucket[index1] = this.bucket[index2];
    this.bucket[index2] = temp;
  }

  heapifyDown() {
    let current = 0;
    let left = this.getLeftChildIndex(current);
    let right = this.getRightChildIndex(current);

    while (this.bucket[left] !== undefined || this.bucket[right] !== undefined) {
      let next = Infinity;

      if (this.bucket[left]) {
        next = left;

        if (this.bucket[right]) {
          next = this.compare(this.bucket[left], this.bucket[right])
            ? right : left;
        }

        if (this.compare(this.bucket[current], this.bucket[next])) {
          this.swap(current, next);
        }
      }

      current = next;
      left = this.getLeftChildIndex(current);
      right = this.getRightChildIndex(current);
    }
  }

  heapifyUp() {
    let childIndex = this.bucket.length - 1;
    let parentIndex = this.getParentIndex(childIndex);

    while (this.bucket[parentIndex]) {
      if (this.compare(this.bucket[parentIndex], this.bucket[childIndex])) {
        this.swap(parentIndex, childIndex);
      }

      childIndex = parentIndex;
      parentIndex = this.getParentIndex(childIndex);
    }
  }

  insert(value) {
    this.bucket.push(value);
    this.heapifyUp();
    return this.bucket;
  }

  pluck() {
    const value = this.bucket[0];
    const lastChild = this.bucket.pop();

    if (this.bucket.length) {
      this.bucket[0] = lastChild;
    }

    this.heapifyDown();
    return value;
  }
}

class MinHeap extends Heap {
  constructor() {
    super(MinHeap.comparator);
  }

  static comparator(value1, value2) {
    return value1 > value2;
  }
}

class MaxHeap extends Heap {
  constructor() {
    super(MaxHeap.comparator);
  }

  static comparator(value1, value2) {
    return value1 < value2;
  }
}

function heapSort(array) {
  const heap = new Heap.Max();

  for (const value of array) {
    heap.insert(value);
  }

  const result = [];

  while (heap.bucket.length) {
    result.push(heap.pluck());
  }

  return result;
}
