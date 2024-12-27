/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findTargetSumWays = function (nums, target) {
  const cache = {};
  const getKey = (i, sum) => `${i}_${sum}`;

  const dfs = (i, sum) => {
    const key = getKey(i, sum);

    if (cache[key] !== undefined) return cache[key];
    if (i === nums.length) {
      return sum === target ? 1 : 0;
    }

    cache[key] = dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]);
    return cache[key];
  };

  return dfs(0, 0);
};
