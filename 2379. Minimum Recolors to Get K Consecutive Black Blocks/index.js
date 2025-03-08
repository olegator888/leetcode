/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
  let white = 0;
  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") white++;
  }
  let res = white;
  for (let i = k; i < blocks.length; i++) {
    if (blocks[i] === "W") white++;
    if (blocks[i - k] === "W") white--;
    res = Math.min(res, white);
  }
  return res;
};
