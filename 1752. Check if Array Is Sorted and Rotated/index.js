/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
  let cnt = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      cnt++;
    }
    if (cnt === 2) {
      return false;
    }
  }

  if (cnt === 1 && nums[0] < nums[nums.length - 1]) {
    return false;
  }

  return true;
};
