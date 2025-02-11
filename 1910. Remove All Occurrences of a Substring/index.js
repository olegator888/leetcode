// total sam

/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function (s, part) {
  const stack = [];
  const checkStack = () => {
    if (stack.length < part.length) return false;
    let start = stack.length - part.length;
    for (let i = start; i < stack.length; i++) {
      if (stack[i] !== part[i - start]) return false;
    }
    return true;
  };

  for (const c of s) {
    stack.push(c);
    if (checkStack()) {
      let i = part.length;
      while (i > 0) {
        stack.pop();
        i--;
      }
    }
  }

  return stack.join("");
};
