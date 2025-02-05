/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function (s1, s2) {
  const indexes = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      indexes.push(i);
    }
    if (indexes.length > 2) {
      return false;
    }
  }

  if (indexes.length === 2) {
    const [i, j] = indexes;
    return s1[i] === s2[j] && s1[j] === s2[i];
  }

  return indexes.length === 0;
};
