// sam

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
    let smallest = this.getSmallest(this.getLeft(i), this.getRight(i));

    while (
      smallest < this.size &&
      this.compare(this.heap[smallest], this.heap[i])
    ) {
      this.swap(smallest, i);
      i = smallest;
      smallest = this.getSmallest(this.getLeft(i), this.getRight(i));
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

  getSmallest(left, right) {
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

var longestDiverseString = function (a, b, c) {
  const res = [];

  const maxHeap = new Heap({
    items: [
      [a, "a"],
      [b, "b"],
      [c, "c"],
    ].filter((item) => item[0] > 0),
    compare: (a, b) => a[0] > b[0],
  });

  while (maxHeap.size > 0) {
    let [count, char] = maxHeap.pop();

    if (
      res.length >= 2 &&
      res[res.length - 1] === char &&
      res[res.length - 2] === char
    ) {
      if (maxHeap.size === 0) break;
      let [nextCount, nextChar] = maxHeap.pop();
      res.push(nextChar);
      nextCount -= 1;
      if (nextCount > 0) {
        maxHeap.add([nextCount, nextChar]);
      }
      maxHeap.add([count, char]);
    } else {
      for (let i = 0; i < Math.min(count, 2); i++) {
        res.push(char);
      }
      count -= 2;
      if (count > 0) {
        maxHeap.add([count, char]);
      }
    }
  }

  return res.join("");
};
