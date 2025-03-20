class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }).map((_, i) => i);
    this.size = Array.from({ length: n }).fill(1);
  }

  find(x) {
    if (x !== this.parent[x]) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(x, y) {
    x = this.find(x);
    y = this.find(y);
    if (x !== y) {
      if (this.size[x] < this.size[y]) {
        this.parent[x] = y;
        this.size[y] += this.size[x];
      } else {
        this.parent[y] = x;
        this.size[x] += this.size[y];
      }
    }
  }
}

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[][]} query
 * @return {number[]}
 */
var minimumCost = function (n, edges, query) {
  const uf = new UnionFind(n);
  for (const [u, v] of edges) {
    uf.union(u, v);
  }

  const componentCost = {};
  for (const [u, v, w] of edges) {
    const root = uf.find(u);
    if (componentCost[root] === undefined) {
      componentCost[root] = w;
    } else {
      componentCost[root] &= w;
    }
  }

  const res = [];
  for (const [src, dst] of query) {
    const r1 = uf.find(src);
    const r2 = uf.find(dst);
    if (r1 !== r2) {
      res.push(-1);
    } else {
      res.push(componentCost[r1]);
    }
  }
  return res;
};
