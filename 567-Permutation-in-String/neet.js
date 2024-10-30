const ord = (letter) => letter.charCodeAt(0) - "a".charCodeAt(0);

var checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) return false;

  const s1Count = Array(26).fill(0);
  const s2Count = Array(26).fill(0);

  for (let i = 0; i < s1.length; i++) {
    s1Count[ord(s1[i])] += 1;
    s2Count[ord(s2[i])] += 1;
  }

  let matches = 0;
  for (let i = 0; i < 26; i++) {
    if (s1Count[i] === s2Count[i]) matches += 1;
  }

  if (matches === 26) return true;

  let l = 0;
  for (let r = s1.length; r < s2.length; r++) {
    let index = ord(s2[r]);
    s2Count[index] += 1;
    if (s1Count[index] === s2Count[index]) matches += 1;
    if (s1Count[index] + 1 === s2Count[index]) matches -= 1;

    index = ord(s2[l]);
    s2Count[index] -= 1;
    if (s1Count[index] === s2Count[index]) matches += 1;
    if (s1Count[index] - 1 === s2Count[index]) matches -= 1;
    l += 1;

    if (matches === 26) return true;
  }

  return false;
};
