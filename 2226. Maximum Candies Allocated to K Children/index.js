/**
 * @param {number[]} candies
 * @param {number} k
 * @return {number}
 */
var maximumCandies = function (candies, k) {
  const total = candies.reduce((acc, cur) => acc + cur, 0);
  if (total < k) return 0;

  let l = 0;
  let r = Math.floor(total / k);
  let res = 0;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);
    let cnt = 0;

    for (const c of candies) {
      cnt += Math.floor(c / m);
      if (cnt >= k) {
        break;
      }
    }

    if (cnt >= k) {
      res = Math.max(res, m);
      l = m + 1;
    } else {
      r = m - 1;
    }
  }

  return res;
};
