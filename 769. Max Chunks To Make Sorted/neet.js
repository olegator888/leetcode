/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  let curMax = -1;
  let res = 0;

  for (let i = 0; i < arr.length; i++) {
    curMax = Math.max(curMax, arr[i]);
    if (i === curMax) res += 1;
  }

  return res;
};
