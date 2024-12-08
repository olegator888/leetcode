/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  const n = start.length;
  let i = 0,
    j = 0;

  while (i < n || j < n) {
    while (i < n && start[i] === "_") {
      i += 1;
    }

    while (j < n && target[j] === "_") {
      j += 1;
    }

    if (i === n || j === n) {
      return i === n && j === n;
    }

    if (
      start[i] !== target[j] ||
      (start[i] === "L" && i < j) ||
      (start[i] === "R" && i > j)
    ) {
      return false;
    }

    i++;
    j++;
  }

  return true;
};
