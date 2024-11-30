/**
 * @param {number[][]} pairs
 * @return {number[][]}
 */
var validArrangement = function (pairs) {
  const graph = {};
  const inDegree = {};
  const outDegree = {};

  for (const [start, end] of pairs) {
    if (!graph[start]) graph[start] = [];
    graph[start].push(end);
    inDegree[end] = (inDegree[end] || 0) + 1;
    outDegree[start] = (outDegree[start] || 0) + 1;
  }

  let startNode = -1;
  for (const node of Object.keys(outDegree)) {
    if (outDegree[node] === (inDegree[node] || 0) + 1) {
      startNode = node;
      break;
    }
  }

  if (startNode === -1) {
    startNode = pairs[0][0];
  }

  const res = [];

  const dfs = (node) => {
    while (graph[node]?.length > 0) {
      const nextNode = graph[node].shift();
      dfs(nextNode);
    }
    res.push(Number(node));
  };

  dfs(startNode);

  res.reverse();

  const output = [];
  for (let i = 1; i < res.length; i++) {
    output.push([res[i - 1], res[i]]);
  }

  return output;
};
