/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
var repairCars = function (ranks, cars) {
  const countRepaired = (time) => {
    let count = 0;
    for (const r of ranks) {
      count += Math.floor(Math.sqrt(time / r));
    }
    return count;
  };
  let l = 1,
    r = ranks[0] * cars * cars;
  let res = -1;
  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    if (countRepaired(m) >= cars) {
      res = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
  return res;
};
