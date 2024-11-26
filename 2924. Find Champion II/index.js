/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */
var findChampion = function (n, edges) {
  const teams = new Set(Array.from({ length: n }).map((_, i) => i));
  for (const [_, team2] of edges) {
    teams.delete(team2);
  }

  return teams.size === 1 ? teams.values().next().value : -1;
};
