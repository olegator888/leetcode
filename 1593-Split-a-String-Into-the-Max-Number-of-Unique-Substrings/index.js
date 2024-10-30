/**
 * @param {string} s
 * @return {number}
 */
var maxUniqueSplit = function (s) {
  const included = new Set();

  const dfs = (i) => {
    if (i === s.length) return 0;

    let res = 0;

    for (let j = i; j < s.length; j++) {
      const substr = s.slice(i, j + 1);
      if (included.has(substr)) continue;
      included.add(substr);
      res = Math.max(res, 1 + dfs(j + 1));
      included.delete(substr);
    }

    return res;
  };

  return dfs(0);
};
