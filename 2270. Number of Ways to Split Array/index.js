/**
 * @param {number[]} nums
 * @return {number}
 */
var waysToSplitArray = function (nums) {
  const total = nums.reduce((acc, cur) => acc + cur, 0);
  let cur = 0;
  let res = 0;

  for (const n of nums.slice(0, nums.length - 1)) {
    cur += n;
    if (cur >= total - cur) res++;
  }

  return res;
};
