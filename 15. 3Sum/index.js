/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);

  const twoSum = (i, target) => {
    const res = [];

    let l = i;
    let r = nums.length - 1;
    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum > target) {
        r -= 1;
        while (r > l && nums[r] === nums[r + 1]) {
          r -= 1;
        }
      } else if (sum < target) {
        l += 1;
        while (l < r && nums[l] === nums[l - 1]) {
          l += 1;
        }
      } else {
        res.push([nums[l], nums[r]]);
        l += 1;
        while (l < r && nums[l] === nums[l - 1]) {
          l += 1;
        }
      }
    }
    return res;
  };

  const res = [];

  let i = 0;

  while (i < nums.length) {
    twoSum(i + 1, -nums[i]).forEach((item) => {
      res.push([nums[i], ...item]);
    });
    i++;
    while (i < nums.length && nums[i] === nums[i - 1]) {
      i++;
    }
  }

  return res;
};
