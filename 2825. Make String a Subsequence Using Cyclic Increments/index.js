/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
var canMakeSubsequence = function (str1, str2) {
  let i = 0,
    j = 0;

  const letters = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(97 + i)
  );

  const next = (char) => {
    const code = char.charCodeAt(0) - "a".charCodeAt(0);
    const nextCode = code < 25 ? code + 1 : 0;
    return letters[nextCode];
  };

  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j] || next(str1[i]) === str2[j]) {
      j++;
    }
    i++;
  }

  return j === str2.length;
};
