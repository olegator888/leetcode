class Heap {
  constructor({ items, compare } = {}) {
    this.compare = compare || ((a, b) => a < b);
    this.heap = [];
    for (const item of items || []) {
      this.add(item);
    }
  }

  add(value) {
    this.heap.push(value);
    this.heapifyUp();
  }

  pop() {
    const value = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return value;
  }

  heapifyUp() {
    let i = this.size - 1;
    let p = this.getP(i);

    while (i > 0 && this.compare(this.heap[i], this.heap[p])) {
      this.swap(i, p);
      i = p;
      p = this.getP(i);
    }
  }

  heapifyDown() {
    let i = 0;
    let smallest = this.getSmallest(i);

    while (
      smallest < this.size &&
      this.compare(this.heap[smallest], this.heap[i])
    ) {
      this.swap(smallest, i);
      i = smallest;
      smallest = this.getSmallest(i);
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  getLeft(i) {
    return i * 2 + 1;
  }

  getRight(i) {
    return i * 2 + 2;
  }

  getSmallest(i) {
    const left = this.getLeft(i);
    const right = this.getRight(i);
    let smallest = left;
    if (right < this.size && this.compare(this.heap[right], this.heap[left])) {
      smallest = right;
    }
    return smallest;
  }

  getP(i) {
    return Math.floor((i - 1) / 2);
  }

  get size() {
    return this.heap.length;
  }
}

/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);

  const minHeap = new Heap({ compare: (a, b) => a[0] < b[0] });
  let maxVal = 0,
    res = 0;

  for (const event of events) {
    const [start, end, value] = event;
    while (minHeap.size > 0 && minHeap.heap[0][0] < start) {
      maxVal = Math.max(maxVal, minHeap.pop()[1]);
    }

    res = Math.max(res, event[2] + maxVal);

    minHeap.add([end, value]);
  }

  return res;
};
