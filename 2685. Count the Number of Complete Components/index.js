/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var countCompleteComponents = function (n, edges) {
  const adj = {};
  for (const [u, v] of edges) {
    if (!adj[u]) adj[u] = [];
    if (!adj[v]) adj[v] = [];
    adj[u].push(v);
    adj[v].push(u);
  }

  const visit = new Set();
  let res = 0;

  const dfs = (v, nodes) => {
    if (visit.has(v)) return [];
    visit.add(v);
    nodes.push(v);
    for (const nei of adj[v] || []) {
      dfs(nei, nodes);
    }
    return nodes;
  };

  for (let i = 0; i < n; i++) {
    if (visit.has(i)) continue;

    const component = dfs(i, []);

    if (
      component.every(
        (node) => (adj[node] || []).length === component.length - 1
      )
    ) {
      res++;
    }
  }

  return res;
};
