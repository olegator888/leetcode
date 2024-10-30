/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    const lastIdx = {};
    for (let i = 0; i < s.length; i++) {
        lastIdx[s[i]] = i;
    }

    let last = -1;
    let sumSize = 0;
    const res = [];

    for (let i = 0; i < s.length; i++) {
        last = Math.max(last, lastIdx[s[i]]);
        if (i === last) {
            const size = i - sumSize + 1;
            sumSize += size;
            res.push(size);
        }
    }

    return res;
};