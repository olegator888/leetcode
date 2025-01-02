/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  const isValid = (w) => vowels.has(w[0]) && vowels.has(w[w.length - 1]);

  const prefix = Array(words.length + 1).fill(0);

  for (let i = 0; i < words.length; i++) {
    prefix[i + 1] = prefix[i] + (isValid(words[i]) ? 1 : 0);
  }

  return queries.map(([l, r]) => prefix[r + 1] - prefix[l]);
};
