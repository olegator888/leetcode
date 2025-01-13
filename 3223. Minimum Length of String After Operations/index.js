/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {
  const cnt = {};

  for (let i = 0; i < s.length; i++) {
    cnt[s[i]] = (cnt[s[i]] ?? 0) + 1;
  }

  let deleted = 0;
  for (const freq of Object.values(cnt)) {
    if (freq % 2) {
      deleted += freq - 1;
    } else {
      deleted += freq - 2;
    }
  }

  return s.length - deleted;
};
