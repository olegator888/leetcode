/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {
  const cnt = {};
  let idx = -1;
  for (let i = nums.length - 1; i > -1; i--) {
    cnt[nums[i]] = (cnt[nums[i]] || 0) + 1;
    if (cnt[nums[i]] === 2) {
      idx = i;
      break;
    }
  }
  return Math.ceil((idx + 1) / 3);
};
