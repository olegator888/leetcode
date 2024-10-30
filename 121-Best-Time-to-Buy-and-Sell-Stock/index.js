/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let res = 0;
    let minPrice = Infinity;

    for (const price of prices) {
        res = Math.max(res, price - minPrice);
        minPrice = Math.min(minPrice, price)
    }

    return res;
};