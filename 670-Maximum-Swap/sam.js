/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const nums = String(num).split("").map(Number);
  const suffix = Array(nums.length).fill(null);
  suffix[suffix.length - 1] = [nums[nums.length - 1], nums.length - 1];

  for (let i = nums.length - 2; i >= 0; i--) {
    if (suffix[i + 1][0] >= nums[i]) {
      suffix[i] = [...suffix[i + 1]];
    } else {
      suffix[i] = [nums[i], i];
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (suffix[i][0] > nums[i]) {
      const j = suffix[i][1];
      [nums[i], nums[j]] = [nums[j], nums[i]];
      break;
    }
  }

  return Number(nums.join(""));
};
