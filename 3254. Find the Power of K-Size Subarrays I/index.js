/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const n = nums.length;
  const res = [];

  for (let i = 0; i < n - k + 1; i += 1) {
    let prev = nums[i] - 1;
    let isValid = true;
    for (let j = i; j < i + k; j++) {
      if (nums[j] - prev !== 1) {
        isValid = false;
        break;
      }
      prev = nums[j];
    }
    res.push(isValid ? prev : -1);
  }

  return res;
};
