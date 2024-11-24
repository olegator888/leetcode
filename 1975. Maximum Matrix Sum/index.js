/**
 * @param {number[][]} matrix
 * @return {number}
 */
var maxMatrixSum = function (matrix) {
  const rows = matrix.length,
    cols = matrix[0].length;
  let total = 0,
    smallest = Infinity,
    negatives = 0;

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const n = Math.abs(matrix[r][c]);
      total += n;
      smallest = Math.min(smallest, n);
      negatives += matrix[r][c] < 0 ? 1 : 0;
    }
  }

  return negatives % 2 === 0 ? total : total - smallest * 2;
};
