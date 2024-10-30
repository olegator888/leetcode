var characterReplacement = function (s, k) {
    const count = {};
    let mostFreq = 0;
    let res = 0;

    let l = 0;
    for (let r = 0; r < s.length; r++) {
        count[s[r]] = (count[s[r]] || 0) + 1;
        mostFreq = Math.max(mostFreq, count[s[r]]);
        while (mostFreq + k < r - l + 1) {
            count[s[l]] -= 1;
            l += 1;
        }
        res = Math.max(res, r - l + 1);
    }

    return res;
};