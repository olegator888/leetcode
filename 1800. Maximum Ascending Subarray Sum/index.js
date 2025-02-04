/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAscendingSum = function (nums) {
  let res = nums[0];
  let cur = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      cur += nums[i];
    } else {
      cur = nums[i];
    }
    res = Math.max(res, cur);
  }
  return res;
};
