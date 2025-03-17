/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
  const cnt = {};
  for (const n of nums) {
    cnt[n] = (cnt[n] || 0) + 1;
  }
  for (const v of Object.values(cnt)) {
    if (v % 2) return false;
  }
  return true;
};
