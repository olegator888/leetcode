/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */
var findKthBit = function (n, k) {
  const length = Math.pow(2, n) - 1;

  const helper = (length, k) => {
    if (length === 1) return "0";

    const half = Math.floor(length / 2);
    if (k <= half) {
      return helper(half, k);
    } else if (k > half + 1) {
      const res = helper(half, 1 + length - k);
      return res === "1" ? "0" : "1";
    } else {
      return "1";
    }
  };

  return helper(length, k);
};
