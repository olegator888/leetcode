/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSquareStreak = function (nums) {
  const numsSet = new Set(nums);

  const checkNum = (n) => {
    let res = 1;
    while (numsSet.has(n * n)) {
      res += 1;
      n *= n;
    }
    return res;
  };

  let res = 0;

  for (const n of nums) {
    res = Math.max(res, checkNum(n));
  }

  return res >= 2 ? res : -1;
};
