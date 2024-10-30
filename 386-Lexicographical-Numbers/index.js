/**
 * @param {number} n
 * @return {number[]}
 */
var lexicalOrder = function (n) {
    const res = [];

    const helper = (num) => {
        if (num > n) return;
        res.push(num);
        for (let i = 0; i < 10; i++) {
            helper(num * 10 + i);
        }
    }

    for (let i = 1; i <= 9; i++) {
        helper(i);
    }

    return res;
};