/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
  const n = grid.length;

  const outOfBounds = (r, c) => {
    return r < 0 || c < 0 || r === n || c === n;
  };

  const dfs = (r, c, label) => {
    if (outOfBounds(r, c) || grid[r][c] !== 1) {
      return 0;
    }
    grid[r][c] = label;
    let size = 1;
    const nei = [
      [r + 1, c],
      [r - 1, c],
      [r, c + 1],
      [r, c - 1],
    ];
    for (const [nr, nc] of nei) {
      size += dfs(nr, nc, label);
    }
    return size;
  };

  const size = {}; // island label -> island size
  let label = 2;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1) {
        size[label] = dfs(r, c, label);
        label++;
      }
    }
  }

  const connect = (r, c) => {
    const visit = new Set();
    const nei = [
      [r + 1, c],
      [r - 1, c],
      [r, c + 1],
      [r, c - 1],
    ];
    let res = 1;
    for (const [nr, nc] of nei) {
      if (
        outOfBounds(nr, nc) ||
        grid[nr][nc] === 0 ||
        visit.has(grid[nr][nc])
      ) {
        continue;
      }
      res += size[grid[nr][nc]];
      visit.add(grid[nr][nc]);
    }
    return res;
  };

  let res = 1;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 0) {
        res = Math.max(res, connect(r, c));
      } else {
        res = Math.max(res, size[grid[r][c]]);
      }
    }
  }

  return res;
};
