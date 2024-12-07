/**
 * @param {number[]} nums
 * @param {number} maxOperations
 * @return {number}
 */
var minimumSize = function (nums, maxOperations) {
  const canDivide = (maxBalls) => {
    let ops = 0;

    for (const n of nums) {
      ops += Math.ceil(n / maxBalls) - 1;
      if (ops > maxOperations) return false;
    }

    return true;
  };

  let l = 1;
  let r = Math.max(...nums);
  let res = r;

  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (canDivide(m)) {
      r = m;
      res = r;
    } else {
      l = m + 1;
    }
  }

  return res;
};
