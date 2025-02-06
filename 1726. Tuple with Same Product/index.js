/**
 * @param {number[]} nums
 * @return {number}
 */
var tupleSameProduct = function (nums) {
  const productCnt = {};
  const pairCnt = {};

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const product = nums[i] * nums[j];
      pairCnt[product] = (pairCnt[product] || 0) + (productCnt[product] || 0);
      productCnt[product] = (productCnt[product] || 0) + 1;
    }
  }

  let res = 0;
  for (const cnt of Object.values(pairCnt)) {
    res += cnt * 8;
  }

  return res;
};
