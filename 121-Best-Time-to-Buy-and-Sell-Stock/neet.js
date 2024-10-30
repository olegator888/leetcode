/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let l = 0, r = 1;
    let maxP = 0;

    while (r < prices.length) {
        if (prices[l] < prices[r]) {
            maxP = Math.max(maxP, prices[r] - prices[l])
        }
        else {
            l = r
        }
        r += 1
    }

    return maxP
};