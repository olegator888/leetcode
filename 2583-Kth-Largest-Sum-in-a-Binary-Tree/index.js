// total sam

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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargestLevelSum = function (root, k) {
  const q = [root];
  const minHeap = new Heap();

  while (q.length > 0) {
    const len = q.length;
    let levelSum = 0;

    for (let i = 0; i < len; i++) {
      const node = q.shift();
      levelSum += node.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }

    minHeap.add(levelSum);
    if (minHeap.size > k) minHeap.pop();
  }

  return minHeap.size === k ? minHeap.pop() : -1;
};
