// total sam

var minGroups = function (intervals) {
  const points = [];

  for (const [start, end] of intervals) {
    points.push([start, 1], [end, -1]);
  }

  points.sort((a, b) => (a[0] === b[0] ? -1 * a[1] : a[0] - b[0]));

  let res = 0;
  let cur = 0;

  for (const [_, delta] of points) {
    cur += delta;
    res = Math.max(res, cur);
  }

  return res;
};
