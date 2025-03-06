/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function (n) {
  let i = 0;
  while (Math.pow(3, i + 1) <= n) {
    i++;
  }
  while (i >= 0) {
    const power = Math.pow(3, i);
    if (power <= n) n -= power;
    i--;
  }
  return n === 0;
};
