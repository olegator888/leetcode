/**
 * @param {number[]} nums
 * @return {number}
 */
var continuousSubarrays = function (nums) {
  let res = 0;
  let l = 0;

  const cnt = {};

  const min = () => Number(Object.keys(cnt)[0]);
  const max = () => {
    const keys = Object.keys(cnt);
    return Number(keys[keys.length - 1]);
  };

  for (let r = 0; r < nums.length; r++) {
    cnt[nums[r]] = (cnt[nums[r]] || 0) + 1;

    while (max() - min() > 2) {
      cnt[nums[l]] -= 1;
      if (cnt[nums[l]] === 0) delete cnt[nums[l]];
      l += 1;
    }

    res += r - l + 1;
  }

  return res;
};
