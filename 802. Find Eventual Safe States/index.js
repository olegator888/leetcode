/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function (graph) {
  const n = graph.length;
  const res = [];
  const safe = {};

  const dfs = (i) => {
    if (graph[i].length === 0) return true;
    if (safe[i] !== undefined) return safe[i];

    safe[i] = false;

    for (const nei of graph[i]) {
      if (!dfs(nei)) return false;
    }

    safe[i] = true;
    return true;
  };

  for (let i = 0; i < n; i++) {
    if (dfs(i)) res.push(i);
  }

  return res;
};
