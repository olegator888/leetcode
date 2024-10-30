// total sam

var checkInclusion = function (s1, s2) {
  if (s2.length < s1.length) {
    return false;
  }

  const s1Count = {};
  for (const c of s1) {
    s1Count[c] = (s1Count[c] || 0) + 1;
  }

  const totalLetters = Object.keys(s1Count).length;
  let validLetters = 0;

  const windowCount = {};
  for (let i = 0; i < s1.length; i++) {
    const char = s2[i];
    windowCount[char] = (windowCount[char] || 0) + 1;
    if (s1Count[char] && windowCount[char] === s1Count[char]) {
      validLetters += 1;
    }
    if (s1Count[char] && windowCount[char] === s1Count[char] + 1) {
      validLetters -= 1;
    }
  }

  let left = 0;

  if (validLetters === totalLetters) {
    return true;
  }

  for (let right = s1.length; right < s2.length; right++) {
    // remove left item
    const leftItem = s2[left];
    if (s1Count[leftItem] && windowCount[leftItem] - 1 === s1Count[leftItem]) {
      validLetters += 1;
    }
    if (s1Count[leftItem] && windowCount[leftItem] === s1Count[leftItem]) {
      validLetters -= 1;
    }
    windowCount[leftItem] -= 1;
    left += 1;

    // add right item
    const rightItem = s2[right];
    if (
      s1Count[rightItem] &&
      (windowCount[rightItem] || 0) + 1 === s1Count[rightItem]
    ) {
      validLetters += 1;
    }
    if (s1Count[rightItem] && windowCount[rightItem] === s1Count[rightItem]) {
      validLetters -= 1;
    }
    windowCount[rightItem] = (windowCount[rightItem] || 0) + 1;

    if (validLetters === totalLetters) {
      return true;
    }
  }

  return false;
};
