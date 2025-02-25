/**
 * @param {number[]} arr
 * @return {number}
 */
var numOfSubarrays = function (arr) {
  let curSum = 0;
  let res = 0;
  const MOD = Math.pow(10, 9) + 7;
  let evenCnt = 0,
    oddCnt = 0;

  for (const n of arr) {
    curSum += n;

    if (curSum % 2) {
      res = (res + 1 + evenCnt) % MOD;
      oddCnt++;
    } else {
      res = (res + oddCnt) % MOD;
      evenCnt++;
    }
  }

  return res;
};
