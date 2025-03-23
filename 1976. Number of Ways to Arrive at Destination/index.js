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
 * @param {number} n
 * @param {number[][]} roads
 * @return {number}
 */
var countPaths = function (n, roads) {
  const adj = {};
  for (const [u, v, w] of roads) {
    if (!adj[u]) adj[u] = [];
    if (!adj[v]) adj[v] = [];
    adj[u].push([v, w]);
    adj[v].push([u, w]);
  }

  const MOD = Math.pow(10, 9) + 7;
  const minCost = Array(n).fill(Infinity);
  const pathCount = Array(n).fill(0);
  pathCount[0] = 1;
  const minHeap = new Heap({ items: [[0, 0]], compare: (a, b) => a[0] < b[0] });

  while (minHeap.size > 0) {
    const [cost, node] = minHeap.pop();

    for (const [nei, nei_cost] of adj[node] || []) {
      const newCost = cost + nei_cost;
      if (newCost < minCost[nei]) {
        minCost[nei] = newCost;
        pathCount[nei] = pathCount[node];
        minHeap.add([newCost, nei]);
      } else if (newCost === minCost[nei]) {
        pathCount[nei] = (pathCount[nei] + pathCount[node]) % MOD;
      }
    }
  }

  return pathCount[n - 1];
};
