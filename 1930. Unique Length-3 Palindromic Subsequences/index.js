/**
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const res = new Set();
  const left = new Set();
  const right = new Map();

  const key = (m, c) => `${m}_${c}`;

  for (const c of s) {
    if (!right.has(c)) right.set(c, 0);
    right.set(c, right.get(c) + 1);
  }

  for (const m of s) {
    right.set(m, right.get(m) - 1);

    left.forEach((c) => {
      if (right.get(c) > 0) res.add(key(m, c));
    });

    left.add(m);
  }

  return res.size;
};
