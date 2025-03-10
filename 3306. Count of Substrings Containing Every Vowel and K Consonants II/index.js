/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  const atleastk = (k) => {
    const vowel = {};
    let nonVowel = 0;
    let res = 0;
    let l = 0;

    const isVowel = (c) => "aeoiu".includes(c);

    for (let r = 0; r < word.length; r++) {
      if (isVowel(word[r])) {
        vowel[word[r]] = (vowel[word[r]] || 0) + 1;
      } else {
        nonVowel++;
      }
      while (Object.keys(vowel).length === 5 && nonVowel >= k) {
        res += word.length - r;
        if (isVowel(word[l])) {
          vowel[word[l]]--;
          if (vowel[word[l]] === 0) {
            delete vowel[word[l]];
          }
        } else {
          nonVowel--;
        }
        l++;
      }
    }

    return res;
  };

  return atleastk(k) - atleastk(k + 1);
};
