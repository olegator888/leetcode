/**
 * @param {number[]} nums
 * @return {number}
 */
var maxWidthRamp = function (nums) {
  const maxRight = Array(nums.length).fill(null);
  maxRight[nums.length - 1] = nums[nums.length - 1];
  for (let i = nums.length - 2; i > -1; i--) {
    maxRight[i] = Math.max(nums[i], maxRight[i + 1]);
  }

  let maxRamp = 0;
  let l = 0;

  for (let r = 1; r < nums.length; r++) {
    while (nums[l] > maxRight[r]) {
      l += 1;
    }
    maxRamp = Math.max(maxRamp, r - l);
  }

  return maxRamp;
};
