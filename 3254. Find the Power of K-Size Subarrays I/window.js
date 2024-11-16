/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function (nums, k) {
  const res = [];
  let l = 0;
  let consec = 1;

  for (let r = 0; r < nums.length; r++) {
    if (r > 0 && nums[r] === nums[r - 1] + 1) {
      consec += 1;
    }

    if (r - l + 1 > k) {
      if (nums[l] + 1 === nums[l + 1]) {
        consec -= 1;
      }
      l += 1;
    }

    if (r - l + 1 === k) {
      res.push(consec === k ? nums[r] : -1);
    }
  }

  return res;
};
