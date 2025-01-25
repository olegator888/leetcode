/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  const groups = [];
  const numToGroup = {};

  for (const n of [...nums].sort((a, b) => a - b)) {
    const lastGroup = groups[groups.length - 1];
    const last = lastGroup ? lastGroup[lastGroup.length - 1] : null;
    if (groups.length === 0 || (last !== null && Math.abs(last - n) > limit)) {
      groups.push([]);
    }
    groups[groups.length - 1].push(n);
    numToGroup[n] = groups.length - 1;
  }

  const res = [];

  for (const n of nums) {
    res.push(groups[numToGroup[n]].shift());
  }

  return res;
};
