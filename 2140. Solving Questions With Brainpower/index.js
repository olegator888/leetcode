/**
 * @param {number[][]} questions
 * @return {number}
 */
var mostPoints = function (questions) {
  const cache = {};
  const dfs = (i) => {
    if (i >= questions.length) return 0;
    if (cache[i] !== undefined) return cache[i];
    cache[i] = Math.max(
      questions[i][0] + dfs(i + questions[i][1] + 1),
      dfs(i + 1)
    );
    return cache[i];
  };
  return dfs(0);
};
