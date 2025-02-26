/**
 * @param {number[]} nums
 * @return {number}
 */
var maxAbsoluteSum = function (nums) {
  let minPre = 0,
    maxPre = 0,
    cur = 0,
    res = 0;
  for (const n of nums) {
    cur += n;
    res = Math.max(res, Math.abs(cur - minPre), Math.abs(cur - maxPre));
    minPre = Math.min(minPre, cur);
    maxPre = Math.max(maxPre, cur);
  }
  return res;
};
