/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumMountainRemovals = function (nums) {
  const n = nums.length;

  const lis = Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        lis[i] = Math.max(lis[i], 1 + lis[j]);
      }
    }
  }

  const lds = Array(n).fill(1);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i + 1; j < n; j++) {
      if (nums[j] < nums[i]) {
        lds[i] = Math.max(lds[i], 1 + lds[j]);
      }
    }
  }

  let res = n;
  for (let i = 0; i < n; i++) {
    if (lis[i] > 1 && lds[i] > 1) {
      res = Math.min(res, n - lis[i] - lds[i] + 1);
    }
  }

  return res;
};
