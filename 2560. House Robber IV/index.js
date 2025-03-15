/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minCapability = function (nums, k) {
  const isValid = (capability) => {
    let i = 0;
    let cnt = 0;
    while (i < nums.length) {
      if (nums[i] <= capability) {
        i += 2;
        cnt += 1;
      } else {
        i += 1;
      }
      if (cnt === k) break;
    }
    return cnt === k;
  };

  let l = 0,
    r = 0;
  for (const n of nums) {
    l = Math.min(l, n);
    r = Math.max(r, n);
  }

  let res = 0;

  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (isValid(m)) {
      res = m;
      r = m - 1;
    } else {
      l = m + 1;
    }
  }

  return res;
};
