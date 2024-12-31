/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
var mincostTickets = function (days, costs) {
  const cache = {};
  const durations = [1, 7, 30];

  const dfs = (i) => {
    if (i === days.length) return 0;
    if (cache[i] !== undefined) return cache[i];

    let res = Infinity;

    for (let j = 0; j < costs.length; j++) {
      const cost = costs[j];
      const duration = durations[j];
      let t = i;
      while (t < days.length && days[t] < days[i] + duration) {
        t++;
      }
      res = Math.min(res, cost + dfs(t));
    }

    cache[i] = res;
    return res;
  };

  return dfs(0);
};
