// total sam

/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */
var wordSubsets = function (words1, words2) {
  const getWordCnt = (w) => {
    const cnt = {};
    for (const c of w) {
      cnt[c] = (cnt[c] || 0) + 1;
    }
    return cnt;
  };

  const commonCnt = {};
  for (const w of words2) {
    for (const [key, value] of Object.entries(getWordCnt(w))) {
      if (commonCnt[key] === undefined) commonCnt[key] = 0;
      commonCnt[key] = Math.max(commonCnt[key], value);
    }
  }

  const isUniversal = (w) => {
    const cnt = getWordCnt(w);
    return Object.keys(commonCnt).every(
      (key) => cnt[key] && commonCnt[key] <= cnt[key]
    );
  };

  return words1.filter(isUniversal);
};
