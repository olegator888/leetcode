/**
 * @param {number[]} nums
 * @return {number}
 */
var longestMonotonicSubarray = function (nums) {
  let cur = 1;
  let res = 1;
  let direction = 0;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      if (direction < 0) {
        cur += 1;
      } else {
        cur = 2;
        direction = -1;
      }
    } else if (nums[i] > nums[i - 1]) {
      if (direction > 0) {
        cur += 1;
      } else {
        cur = 2;
        direction = 1;
      }
    } else {
      cur = 1;
      direction = 0;
    }
    res = Math.max(res, cur);
  }

  return res;
};
