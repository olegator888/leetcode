/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  const comp = [];

  let i = 0;
  while (i < word.length) {
    const initialIndex = i;
    while (
      i < word.length - 1 &&
      word[i] === word[i + 1] &&
      i - initialIndex + 1 < 9
    ) {
      i += 1;
    }
    comp.push(i - initialIndex + 1, word[initialIndex]);
    i += 1;
  }

  return comp.join("");
};
