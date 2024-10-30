/**
 * @param {number[]} arr
 * @param {number} k
 * @return {boolean}
 */
var canArrange = function (arr, k) {
  const total = arr.reduce((acc, cur) => acc + cur, 0);
  if (total % k) return false;

  const cnt = {};
  for (const n of arr) {
    const reminder = ((n % k) + k) % k; // handle negative values
    cnt[reminder] = (cnt[reminder] || 0) + 1;
  }

  for (const n of arr) {
    const reminder = ((n % k) + k) % k; // handle negative values
    // this n is already used
    if (!cnt[reminder]) continue;

    cnt[reminder] -= 1;
    const diff = reminder > 0 ? k - reminder : 0;
    if (!cnt[diff]) return false;
    cnt[diff] -= 1;
  }

  return true;
};
