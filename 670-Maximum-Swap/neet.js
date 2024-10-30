/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  const nums = String(num).split("").map(Number);

  let maxDigit = 0;
  let maxI = -1;
  let swapI = -1,
    swapJ = -1;

  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] > maxDigit) {
      maxDigit = nums[i];
      maxI = i;
    }
    if (nums[i] < maxDigit) {
      swapI = i;
      swapJ = maxI;
    }
  }

  [nums[swapI], nums[swapJ]] = [nums[swapJ], nums[swapI]];

  return Number(nums.join(""));
};
