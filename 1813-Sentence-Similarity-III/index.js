/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function (sentence1, sentence2) {
  let s1 = sentence1.split(" ");
  let s2 = sentence2.split(" ");
  if (s1.length > s2.length) {
    [s1, s2] = [s2, s1];
  }

  let l = 0;
  while (l < s1.length && s1[l] === s2[l]) {
    l += 1;
  }

  let r1 = s1.length - 1;
  let r2 = s2.length - 1;
  while (r1 >= l && s1[r1] === s2[r2]) {
    r1 -= 1;
    r2 -= 1;
  }

  return l > r1;
};
