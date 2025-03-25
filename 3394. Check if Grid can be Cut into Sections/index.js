/**
 * @param {number} n
 * @param {number[][]} rectangles
 * @return {boolean}
 */
var checkValidCuts = function (n, rectangles) {
  const x = rectangles.map((r) => [r[0], r[2]]);
  const y = rectangles.map((r) => [r[1], r[3]]);
  x.sort((a, b) => a[0] - b[0]);
  y.sort((a, b) => a[0] - b[0]);

  const countNonOverlapping = (intervals) => {
    let count = 0;
    let prevEnd = -1;
    for (const [start, end] of intervals) {
      if (prevEnd <= start) count++;
      prevEnd = Math.max(prevEnd, end);
    }
    return count;
  };

  return Math.max(countNonOverlapping(x), countNonOverlapping(y)) >= 3;
};
