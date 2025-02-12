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
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function (nums) {
  const groups = {};

  const getIntegerSum = (n) => {
    let res = 0;
    while (n > 0) {
      res += n % 10;
      n = Math.floor(n / 10);
    }
    return res;
  };

  for (const n of nums) {
    const group = getIntegerSum(n);
    if (!groups[group]) groups[group] = new Heap({ compare: (a, b) => a > b });
    groups[group].add(n);
  }

  let res = 0;

  for (const items of Object.values(groups)) {
    if (items.size < 2) continue;
    res = Math.max(res, items.pop() + items.pop());
  }

  if (res === 0) return -1;

  return res;
};
