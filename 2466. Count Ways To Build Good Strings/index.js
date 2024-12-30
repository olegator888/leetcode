/**
 * @param {number} low
 * @param {number} high
 * @param {number} zero
 * @param {number} one
 * @return {number}
 */
var countGoodStrings = function (low, high, zero, one) {
  const cache = {};

  const getStrings = (length) => {
    if (length > high) return 0;
    if (cache[length] !== undefined) return cache[length];

    cache[length] =
      ((length >= low && length <= high ? 1 : 0) +
        getStrings(length + one) +
        getStrings(length + zero)) %
      1000000007;

    return cache[length];
  };

  return getStrings(0);
};
