const ord = (letter) => letter.charCodeAt(0) - 97;

/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function (words, target) {
  const MOD = 1000000007;
  const dp = Array.from({ length: words[0].length }).map(() =>
    Array(target.length).fill(-1)
  );
  const charFrequency = Array.from({ length: words[0].length }).map(() =>
    Array(26).fill(0)
  );
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[0].length; j++) {
      charFrequency[j][ord(words[i][j])] += 1;
    }
  }

  const getWords = (wordsIndex, targetIndex) => {
    if (targetIndex === target.length) return 1;
    if (
      wordsIndex === words[0].length ||
      words[0].length - wordsIndex < target.length - targetIndex
    ) {
      return 0;
    }
    if (dp[wordsIndex][targetIndex] !== -1) return dp[wordsIndex][targetIndex];

    let countWays = 0;
    const curPos = ord(target[targetIndex]);

    // skip current word
    countWays += getWords(wordsIndex + 1, targetIndex);

    // use current word
    countWays +=
      charFrequency[wordsIndex][curPos] *
      getWords(wordsIndex + 1, targetIndex + 1);

    dp[wordsIndex][targetIndex] = countWays % MOD;
    return dp[wordsIndex][targetIndex];
  };

  return getWords(0, 0);
};
