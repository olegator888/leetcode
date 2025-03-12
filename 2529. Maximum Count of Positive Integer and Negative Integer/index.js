/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
  let neg = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 0) neg++;
    if (nums[i] > 0) {
      return Math.max(neg, nums.length - i);
    }
  }
  return neg;
};
