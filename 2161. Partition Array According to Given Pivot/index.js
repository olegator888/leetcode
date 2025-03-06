/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function (nums, pivot) {
  let i = 0,
    j = nums.length - 1;
  let i2 = 0,
    j2 = nums.length - 1;
  const res = Array(nums.length).fill(0);

  while (i < nums.length) {
    if (nums[i] < pivot) {
      res[i2] = nums[i];
      i2++;
    }
    if (nums[j] > pivot) {
      res[j2] = nums[j];
      j2--;
    }
    i++;
    j--;
  }

  while (i2 <= j2) {
    res[i2] = pivot;
    i2++;
  }

  return res;
};
