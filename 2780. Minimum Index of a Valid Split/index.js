/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumIndex = function (nums) {
  const cnt = {};
  let dominant = 0;
  for (const n of nums) {
    cnt[n] = (cnt[n] || 0) + 1;
    if (cnt[n] > nums.length / 2) {
      dominant = n;
    }
  }

  let have = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != dominant) {
      continue;
    }
    have++;
    left = cnt[dominant] - have;
    if (have > (i + 1) / 2 && left > (nums.length - i - 1) / 2) {
      return i;
    }
  }

  return -1;
};
