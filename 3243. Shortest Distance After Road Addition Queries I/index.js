/**
 * @param {number} n
 * @param {number[][]} queries
 * @return {number[]}
 */
var shortestDistanceAfterQueries = function (n, queries) {
  const adj = Array.from({ length: n - 1 }).map((_, i) => [i + 1]);

  const shortestPath = () => {
    const q = [[0, 0]];
    const visit = new Set([0]);

    while (q.length > 0) {
      const [node, pathLength] = q.shift();
      if (node === n - 1) return pathLength;

      for (const nei of adj[node]) {
        if (visit.has(nei)) continue;
        q.push([nei, pathLength + 1]);
        visit.add(nei);
      }
    }
  };

  const res = [];
  for (const [src, dst] of queries) {
    adj[src].push(dst);
    res.push(shortestPath());
  }

  return res;
};
