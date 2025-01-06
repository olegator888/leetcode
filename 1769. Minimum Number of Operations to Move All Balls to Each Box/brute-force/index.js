/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
  const res = Array.from({ length: boxes.length });

  for (let i = 0; i < boxes.length; i++) {
    let total = 0;
    for (let j = 0; j < boxes.length; j++) {
      if (i === j) continue;
      total += Number(boxes[j]) * Math.abs(i - j);
    }
    res[i] = total;
  }

  return res;
};
