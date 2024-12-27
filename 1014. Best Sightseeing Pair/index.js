/**
 * @param {number[]} values
 * @return {number}
 */
var maxScoreSightseeingPair = function (values) {
  let res = 0;
  let cur_max = values[0] - 1;

  for (let i = 1; i < values.length; i++) {
    res = Math.max(res, values[i] + cur_max);
    cur_max = Math.max(cur_max - 1, values[i] - 1);
  }

  return res;
};
