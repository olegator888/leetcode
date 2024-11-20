// sam after reading editorial

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var takeCharacters = function (s, k) {
  const defaultCnt = {
    a: 0,
    b: 0,
    c: 0,
  };
  const cnt = { ...defaultCnt };

  for (const char of s) {
    cnt[char] = (cnt[char] || 0) + 1;
  }

  // it's impossible to get at least k of each characters
  if (Object.values(cnt).some((value) => value < k)) return -1;

  const window = { ...defaultCnt };
  let longest = 0;

  const isWindowValid = () =>
    Object.keys(window).every((char) => cnt[char] - window[char] >= k);

  let l = 0;
  for (let r = 0; r < s.length; r++) {
    window[s[r]] = (window[s[r]] || 0) + 1;

    while (!isWindowValid()) {
      window[s[l]] -= 1;
      l += 1;
    }

    longest = Math.max(longest, r - l + 1);
  }

  return s.length - longest;
};

/**
  window is valid if amount of characters outside the window is valid
  amount of char outside of the window = cnt[char] - window[char]
*/
