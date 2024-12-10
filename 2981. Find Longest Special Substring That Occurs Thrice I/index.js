/**
 * @param {string} s
 * @return {number}
 */
var maximumLength = function (s) {
  const cnt = {};

  for (let i = 0; i < s.length; i++) {
    cnt[s[i]] = (cnt[s[i]] || 0) + 1;
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] !== s[j]) break;
      const substr = s.slice(i, j + 1);
      cnt[substr] = (cnt[substr] || 0) + 1;
    }
  }

  let res = 0;
  for (const [key, val] of Object.entries(cnt)) {
    if (val < 3) continue;
    res = Math.max(res, key.length);
  }

  return res || -1;
};
