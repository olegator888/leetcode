// total sam

var maxProfit = function (prices) {
    let res = 0;
    let i = 0;

    while (i < prices.length) {
        let maxPrice = prices[i];
        let j = i + 1;
        while (j < prices.length && prices[j] > maxPrice) {
            maxPrice = prices[j];
            j++;
        }
        res += maxPrice - prices[i];
        i = j;
    }

    return res;
};