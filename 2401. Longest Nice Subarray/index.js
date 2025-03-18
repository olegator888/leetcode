/**
 * @param {number[]} nums
 * @return {number}
 */
var longestNiceSubarray = function (nums) {
  let res = 1;
  let cur = 0;
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    while ((cur & nums[r]) !== 0) {
      cur = cur ^ nums[l++];
    }
    res = Math.max(res, r - l + 1);
    cur = cur | nums[r];
  }
  return res;
};
