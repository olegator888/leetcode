const isDigit = (token) => !isNaN(Number(token));

/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function (s) {
  const stack = [];

  for (const c of s) {
    if (!isDigit(c)) stack.push(c);
    else if (stack.length > 0) stack.pop();
  }

  return stack.join("");
};
