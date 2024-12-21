/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number[]} values
 * @param {number} k
 * @return {number}
 */
var maxKDivisibleComponents = function (n, edges, values, k) {
  const adj = {};

  for (let i = 0; i < n; i++) adj[i] = [];

  for (const [n1, n2] of edges) {
    adj[n1].push(n2);
    adj[n2].push(n1);
  }

  let res = 0;

  const dfs = (cur, parent) => {
    let total = values[cur];

    for (const child of adj[cur]) {
      if (child === parent) continue;
      total += dfs(child, cur);
    }

    if (total % k === 0) res += 1;

    return total;
  };

  dfs(0, -1);

  return res;
};
