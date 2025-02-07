// total sam

Map.prototype.increment = function (key) {
  this.set(key, (this.get(key) || 0) + 1);
};
Map.prototype.decrement = function (key) {
  this.set(key, this.get(key) - 1);
};

/**
 * @param {number} limit
 * @param {number[][]} queries
 * @return {number[]}
 */
var queryResults = function (limit, queries) {
  const ballToColor = new Map();
  const colorToBalls = new Map();
  let currentColors = 0;
  const res = [];

  for (const [ball, color] of queries) {
    if (!ballToColor.has(ball)) {
      ballToColor.set(ball, color);
      colorToBalls.increment(color);
      if (colorToBalls.get(color) === 1) currentColors++;
    } else {
      const oldColor = ballToColor.get(ball);
      ballToColor.set(ball, color);
      if (oldColor !== color) {
        colorToBalls.increment(color);
        if (colorToBalls.get(color) === 1) currentColors++;
        colorToBalls.decrement(oldColor);
        if (colorToBalls.get(oldColor) === 0) currentColors--;
      }
    }
    res.push(currentColors);
  }

  return res;
};
