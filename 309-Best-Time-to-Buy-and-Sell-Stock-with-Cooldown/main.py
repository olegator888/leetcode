from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        cache = {}

        def dfs(i, canBuy):
            if i >= len(prices): return 0
            if (i, canBuy) in cache: return cache[(i, canBuy)]

            if canBuy:
                cache[(i, canBuy)] = max(
                    dfs(i + 1, True), # skip
                    dfs(i + 1, False) - prices[i] # buy
                )
                return cache[(i, canBuy)]
            
            cache[(i, canBuy)] = max(
                dfs(i + 1, False), # skip
                dfs(i + 2, True) + prices[i] # sell
            )
            return cache[(i, canBuy)]
        
        return dfs(0, True)