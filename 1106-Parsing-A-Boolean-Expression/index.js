/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  const s = expression;
  let i = 0;

  const helper = () => {
    const cur = s[i];
    i += 1;

    if (cur === "t") return true;
    if (cur === "f") return false;
    if (cur === "!") {
      i += 1;
      const res = !helper();
      i += 1;
      return res;
    }

    const children = [];
    i += 1;
    while (s[i] !== ")") {
      if (s[i] !== ",") {
        children.push(helper());
      } else {
        i += 1;
      }
    }
    i += 1;

    if (cur === "&") {
      return children.every(Boolean);
    }
    if (cur === "|") {
      return children.some(Boolean);
    }
  };

  return helper();
};
