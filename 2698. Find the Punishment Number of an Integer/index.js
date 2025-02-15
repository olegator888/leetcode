/**
 * @param {number} n
 * @return {number}
 */
var punishmentNumber = function (n) {
  const partition = (i, cur, target, string) => {
    if (i === string.length && cur === target) {
      return true;
    }

    for (let j = i; j < string.length; j++) {
      if (
        partition(j + 1, cur + Number(string.slice(i, j + 1)), target, string)
      ) {
        return true;
      }
    }

    return false;
  };

  let res = 0;

  for (let i = 1; i <= n; i++) {
    if (partition(0, 0, i, String(i * i))) {
      res += i * i;
    }
  }

  return res;
};
