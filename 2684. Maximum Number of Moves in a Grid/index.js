// total sam

var maxMoves = function (grid) {
  const rows = grid.length;
  const cols = grid[0].length;

  const cache = {};
  const getKey = (r, c) => r * cols + c;

  let res = 0;

  const traverse = (r, c, prev) => {
    if (r === rows || r < 0 || c === cols || c < 0 || grid[r][c] <= prev) {
      return 0;
    }

    const key = getKey(r, c);

    if (cache[key] !== undefined) {
      return cache[key];
    }

    cache[key] =
      1 +
      Math.max(
        traverse(r - 1, c + 1, grid[r][c]),
        traverse(r, c + 1, grid[r][c]),
        traverse(r + 1, c + 1, grid[r][c])
      );

    return cache[key];
  };

  for (let r = 0; r < rows; r++) {
    res = Math.max(res, traverse(r, 0) - 1);
  }

  return res;
};
