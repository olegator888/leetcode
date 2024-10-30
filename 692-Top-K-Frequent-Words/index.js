/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  const freq = Array.from({ length: words.length + 1 }).map(() => []);
  const wordsCount = {};
  for (const w of words) {
    wordsCount[w] = (wordsCount[w] || 0) + 1;
  }
  for (const [word, cnt] of Object.entries(wordsCount)) {
    freq[cnt].push(word);
  }

  const res = [];

  for (let i = freq.length - 1; i > 0; i--) {
    const words = freq[i];
    if (words.length === 0) continue;
    words.sort();
    for (const w of words) {
      res.push(w);
      if (res.length === k) {
        return res;
      }
    }
  }
};
