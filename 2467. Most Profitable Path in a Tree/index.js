/**
 * @param {number[][]} edges
 * @param {number} bob
 * @param {number[]} amount
 * @return {number}
 */
var mostProfitablePath = function (edges, bob, amount) {
  const adj = {};
  for (const [u, v] of edges) {
    if (!adj[u]) adj[u] = [];
    if (!adj[v]) adj[v] = [];
    adj[u].push(v);
    adj[v].push(u);
  }

  const bobTimes = {};
  const bobTravel = (node, prev, time) => {
    if (node === 0) {
      bobTimes[node] = time;
      return true;
    }
    for (const nei of adj[node] || []) {
      if (nei === prev) continue;
      if (bobTravel(nei, node, time + 1)) {
        bobTimes[node] = time;
        return true;
      }
    }
    return false;
  };
  bobTravel(bob, -1, 0);

  const aliceTravel = (node, prev, time, profit) => {
    if (adj[node] && adj[node].length === 1 && adj[node][0] === prev) {
      return profit;
    }
    let res = -Infinity;
    for (const nei of adj[node] || []) {
      if (nei === prev) continue;
      const neiTime = time + 1;
      let neiProfit = amount[nei];
      if (bobTimes[nei] !== undefined) {
        if (bobTimes[nei] < neiTime) {
          neiProfit = 0;
        }
        if (bobTimes[nei] === neiTime) {
          neiProfit /= 2;
        }
      }
      res = Math.max(res, aliceTravel(nei, node, neiTime, profit + neiProfit));
    }
    return res;
  };

  return aliceTravel(0, null, 0, amount[0]);
};
