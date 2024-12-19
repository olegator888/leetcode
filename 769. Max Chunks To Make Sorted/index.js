/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function (arr) {
  const check = (l, r) => {
    const items = new Set(arr.slice(l, r + 1));
    for (let i = l; i < r + 1; i++) {
      if (!items.has(i)) return false;
    }
    return true;
  };

  let res = 0;
  let l = 0;
  for (let r = 0; r < arr.length; r++) {
    if (check(l, r)) {
      res += 1;
      l = r + 1;
    }
  }

  return res;
};
