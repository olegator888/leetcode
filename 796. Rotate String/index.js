/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== goal[0]) continue;

    if (s.slice(i) + s.slice(0, i) === goal) {
      return true;
    }
  }

  return false;
};
