/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    const res = [];

    for (const int of intervals) {
        if (res.length > 0 && res[res.length - 1][1] >= int[0]) {
            const [start, end] = res.pop();
            res.push([start, Math.max(end, int[1])]);
        } else {
            res.push(int);
        }
    }

    return res;
};