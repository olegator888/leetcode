/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var isArraySpecial = function (nums, queries) {
  const violating = [];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] % 2 === nums[i - 1] % 2) violating.push(i);
  }

  const binarySeach = (start, end) => {
    let left = 0,
      right = violating.length - 1;

    while (left <= right) {
      const m = Math.floor((left + right) / 2);
      const index = violating[m];
      if (index < start) {
        left = m + 1;
      } else if (index > end) {
        right = m - 1;
      } else {
        return false;
      }
    }

    return true;
  };

  const res = [];
  for (const [start, end] of queries) {
    res.push(binarySeach(start + 1, end));
  }

  return res;
};
