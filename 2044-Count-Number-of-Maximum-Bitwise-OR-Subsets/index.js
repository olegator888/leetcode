/**
 * @param {number[]} nums
 * @return {number}
 */
var countMaxOrSubsets = function (nums) {
  const maxOr = nums.reduce((acc, cur) => acc | cur, 0);

  const helper = (i, cur) => {
    if (i === nums.length) {
      return cur === maxOr ? 1 : 0;
    }

    return helper(i + 1, cur | nums[i]) + helper(i + 1, cur);
  };

  return helper(0, 0);
};
