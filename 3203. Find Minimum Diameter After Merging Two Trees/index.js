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
 * @param {number[][]} edges1
 * @param {number[][]} edges2
 * @return {number}
 */
var minimumDiameterAfterMerge = function (edges1, edges2) {
  const getAdj = (edges) => {
    const adj = {};
    for (const [n1, n2] of edges) {
      if (!adj[n1]) adj[n1] = [];
      if (!adj[n2]) adj[n2] = [];
      adj[n1].push(n2);
      adj[n2].push(n1);
    }
    return adj;
  };

  const adj1 = getAdj(edges1);
  const adj2 = getAdj(edges2);

  const getDiameter = (cur, par, adj) => {
    let maxD = 0;
    const maxChildPaths = new Heap({ items: [0, 0] });

    if (adj[cur]) {
      for (const nei of adj[cur]) {
        if (nei === par) continue;
        const [neiD, neiLeafPath] = getDiameter(nei, cur, adj);
        maxD = Math.max(maxD, neiD);
        maxChildPaths.add(neiLeafPath);
        maxChildPaths.pop();
      }
    }

    maxD = Math.max(
      maxD,
      maxChildPaths.heap.reduce((acc, cur) => acc + cur, 0)
    );

    return [maxD, 1 + Math.max(...maxChildPaths.heap)];
  };

  const [d1] = getDiameter(0, -1, adj1);
  const [d2] = getDiameter(0, -1, adj2);

  return Math.max(d1, d2, 1 + Math.ceil(d1 / 2) + Math.ceil(d2 / 2));
};
