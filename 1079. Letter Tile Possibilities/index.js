/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const count = {};
  for (const c of tiles) {
    count[c] = (count[c] || 0) + 1;
  }

  const backtrack = () => {
    let res = 0;
    for (const c of Object.keys(count)) {
      if (count[c] === 0) continue;
      count[c]--;
      res++;
      res += backtrack();
      count[c]++;
    }
    return res;
  };

  return backtrack(0);
};
