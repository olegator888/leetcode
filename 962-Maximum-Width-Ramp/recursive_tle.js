// total sam

var maxWidthRamp = function (nums) {
  const helper = (i, j) => {
    if (i >= j) {
      return 0;
    }

    if (nums[i] <= nums[j]) {
      return j - i;
    }

    return Math.max(helper(i + 1, j), helper(i, j - 1));
  };

  return helper(0, nums.length - 1);
};
