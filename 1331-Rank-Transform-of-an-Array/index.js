/**
 * @param {number[]} arr
 * @return {number[]}
 */
var arrayRankTransform = function (arr) {
  const rankMap = {};
  let rank = 1;
  for (const n of [...arr].sort((a, b) => a - b)) {
    if (rankMap[n]) continue;
    rankMap[n] = rank;
    rank += 1;
  }
  return arr.map((n) => rankMap[n]);
};
