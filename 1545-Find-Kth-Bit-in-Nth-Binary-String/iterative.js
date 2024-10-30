/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  let length = Math.pow(2, n) - 1;
  let inverted = false;

  while (length > 1) {
    const half = Math.floor(length / 2);

    if (k <= half) {
      length = half;
    } else if (k > half + 1) {
      inverted = !inverted;
      k = 1 + length - k;
      length = half;
    } else {
      return inverted ? "0" : "1";
    }
  }

  return inverted ? "1" : "0";
};
