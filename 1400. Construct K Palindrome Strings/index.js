/**
 * @param {string} s
 * @param {number} k
 * @return {boolean}
 */
var canConstruct = function (s, k) {
  if (s.length < k) return false;
  const sCount = {};
  for (const c of s) {
    sCount[c] = (sCount[c] || 0) + 1;
  }
  let oddCount = 0;
  for (const v of Object.values(sCount)) {
    if (v % 2) oddCount++;
  }
  return oddCount <= k;
};
