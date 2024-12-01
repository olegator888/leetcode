/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const cnt = {};
  for (const n of arr) {
    cnt[n] = (cnt[n] || 0) + 1;
    if ((n === 0 && cnt[n] > 1) || (n !== 0 && (cnt[n * 2] || cnt[n / 2])))
      return true;
  }
  return false;
};
