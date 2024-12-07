/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function (s, spaces) {
  const spaces = new Set(spaces);
  const res = [];

  for (let i = 0; i < s.length; i++) {
    if (spaces.has(i)) res.push(" ");
    res.push(s[i]);
  }

  return res.join("");
};
