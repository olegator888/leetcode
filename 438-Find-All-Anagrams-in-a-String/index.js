// total sam

var findAnagrams = function (s, p) {
    if (s.length < p.length) return [];

    const pCount = {};
    for (const c of p) {
        pCount[c] = (pCount[c] || 0) + 1;
    }

    const totalLetters = Object.keys(pCount).length;
    let validLetters = 0;

    const window = {};

    for (let i = 0; i < p.length; i++) {
        window[s[i]] = (window[s[i]] || 0) + 1;
        if (!pCount[s[i]]) continue;
        if (window[s[i]] === pCount[s[i]]) validLetters++;
        if (window[s[i]] === pCount[s[i]] + 1) validLetters--;
    }

    const res = [];
    if (validLetters === totalLetters) res.push(0);

    let l = 0;

    for (let r = p.length; r < s.length; r++) {
        // removing left value
        const leftChar = s[l];
        if (pCount[leftChar] && pCount[leftChar] === window[leftChar]) validLetters--;
        if (pCount[leftChar] && pCount[leftChar] === window[leftChar] - 1) validLetters++;
        window[leftChar]--;
        l++;

        // adding right value
        const rightChar = s[r];
        if (pCount[rightChar] && pCount[rightChar] === window[rightChar]) validLetters--;
        if (pCount[rightChar] && pCount[rightChar] === (window[rightChar] || 0) + 1) validLetters++;
        window[rightChar] = (window[rightChar] || 0) + 1;

        if (validLetters === totalLetters) res.push(l);
    }

    return res;
};