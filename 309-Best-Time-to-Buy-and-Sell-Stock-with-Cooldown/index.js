// total sam

var maxProfit = function (prices) {
    const cache = {};
    const getKey = (i, canBuy) => `${i}_${canBuy}`;

    const dfs = (i, canBuy) => {
        if (i >= prices.length) return 0;
        const key = getKey(i, canBuy);
        if (cache.hasOwnProperty(key)) return cache[key];

        if (canBuy) {
            cache[key] = Math.max(
                dfs(i + 1, true), // skip
                dfs(i + 1, false) - prices[i] // buy
            )
            return cache[key];
        }
        cache[key] = Math.max(
            dfs(i + 1, false), // skip
            dfs(i + 2, true) + prices[i] // sell
        )
        return cache[key];
    }

    return dfs(0, true);
};