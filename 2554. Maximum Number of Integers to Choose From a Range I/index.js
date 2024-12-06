/**
 * @param {number[]} banned
 * @param {number} n
 * @param {number} maxSum
 * @return {number}
 */
var maxCount = function (banned, n, maxSum) {
  banned = new Set(banned);
  let res = 0,
    total = 0;

  for (let i = 1; i < n + 1; i++) {
    if (banned.has(i)) continue;
    total += i;
    if (total > maxSum) break;
    res += 1;
  }

  return res;
};
