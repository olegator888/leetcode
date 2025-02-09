Map.prototype.increment = function (key, delta = 1) {
  this.set(key, (this.get(key) || 0) + delta);
};
Map.prototype.safeGet = function (key) {
  return this.get(key) || 0;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var countBadPairs = function (nums) {
  let totalPairs = 0;
  let goodPairs = 0;
  const count = new Map();

  for (let i = 0; i < nums.length; i++) {
    totalPairs += i;
    goodPairs += count.safeGet(nums[i] - i);
    count.increment(nums[i] - i);
  }

  return totalPairs - goodPairs;
};
