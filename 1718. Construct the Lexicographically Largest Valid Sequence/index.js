/**
 * @param {number} n
 * @return {number[]}
 */
var constructDistancedSequence = function (n) {
  const res = Array(2 * n - 1).fill(0);
  const used = new Set();

  const backtrack = (i) => {
    if (i === res.length) return true;

    for (let num = n; num >= 1; num--) {
      if (used.has(num)) continue;
      if (num > 1 && (i + num >= res.length || res[i + num])) continue;

      used.add(num);
      res[i] = num;
      if (num > 1) res[i + num] = num;

      let j = i + 1;
      while (j < res.length && res[j]) j++;

      if (backtrack(j)) return true;

      used.delete(num);
      res[i] = 0;
      if (num > 1) res[i + num] = 0;
    }

    return false;
  };

  backtrack(0);

  return res;
};
