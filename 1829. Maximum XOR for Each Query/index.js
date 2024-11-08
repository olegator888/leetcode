/**
 * @param {number[]} nums
 * @param {number} maximumBit
 * @return {number[]}
 */
var getMaximumXor = function (nums, maximumBit) {
  let xor = 0;
  for (const n of nums) {
    xor ^= n;
  }

  const mask = Math.pow(2, maximumBit) - 1;
  const res = [];
  for (let i = nums.length - 1; i > -1; i--) {
    res.push(xor ^ mask);
    xor ^= nums[i];
  }

  return res;
};
