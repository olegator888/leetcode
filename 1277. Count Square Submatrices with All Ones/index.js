/**
 * @param {number[][]} matrix
 * @return {number}
 */
var countSquares = function (matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  let res = 0;

  const helper = (r, c, len) => {
    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len; j++) {
        if (r + i >= rows || c + j >= cols || matrix[r + i][c + j] !== 1) {
          return 0;
        }
      }
    }

    return 1 + helper(r, c, len + 1);
  };

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      res += helper(r, c, 1);
    }
  }

  return res;
};
