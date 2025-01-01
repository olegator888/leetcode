/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function (s) {
  let ones = s.split("").reduce((acc, cur) => acc + (cur === "1" ? 1 : 0), 0);
  let zeros = 0;
  let maxScore = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === "1") ones--;
    else zeros++;
    maxScore = Math.max(maxScore, zeros + ones);
  }

  return maxScore;
};
