/**
 * @param {number[][]} events
 * @return {number}
 */
var maxTwoEvents = function (events) {
  events.sort((a, b) => a[0] - b[0]);

  const dontIntersect = (a, b) => {
    return a[1] < b[0] || b[1] < a[0];
  };

  let res = 0;

  for (let i = 0; i < events.length; i++) {
    res = Math.max(res, events[i][2]);
    for (let j = i + 1; j < events.length; j++) {
      if (dontIntersect(events[i], events[j])) {
        res = Math.max(res, events[i][2] + events[j][2]);
      }
    }
  }

  return res;
};
