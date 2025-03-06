/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function (grid) {
  const n = grid.length;
  const cnt = {};
  for (const row of grid) {
    for (const n of row) {
      cnt[n] = (cnt[n] || 0) + 1;
    }
  }
  let double = 0,
    missing = 0;

  for (let i = 1; i < n * n + 1; i++) {
    if (cnt[i] === 2) double = i;
    if (cnt[i] === undefined) missing = i;
  }

  return [double, missing];
};
