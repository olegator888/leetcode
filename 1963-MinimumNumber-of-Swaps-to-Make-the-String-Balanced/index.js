/**
 * @param {string} s
 * @return {number}
 */
var minSwaps = function (s) {
  let opening = 0;
  let unbalanced = 0;

  for (const c of s) {
    if (c === "[") {
      opening += 1;
    } else {
      if (opening > 0) {
        opening -= 1;
      } else {
        unbalanced += 1;
      }
    }
  }

  return Math.floor((unbalanced + 1) / 2);
};
