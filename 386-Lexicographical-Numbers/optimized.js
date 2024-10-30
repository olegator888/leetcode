/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    const res = [];

    let cur = 1;

    while (res.length < n) {
        res.push(cur);

        if (cur * 10 <= n) {
            cur *= 10;
        } else {
            while (cur === n || cur % 10 === 9) {
                cur = Math.floor(cur / 10);
            }
            cur += 1;
        }
    }

    return res;
};