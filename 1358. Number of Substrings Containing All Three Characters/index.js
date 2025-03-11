/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function (s) {
  let res = 0;
  const cnt = {};
  let l = 0;

  for (let r = 0; r < s.length; r++) {
    cnt[s[r]] = (cnt[s[r]] || 0) + 1;
    while (Object.keys(cnt).length === 3) {
      res += s.length - r;
      cnt[s[l]] -= 1;
      if (cnt[s[l]] === 0) {
        delete cnt[s[l]];
      }
      l++;
    }
  }

  return res;
};
