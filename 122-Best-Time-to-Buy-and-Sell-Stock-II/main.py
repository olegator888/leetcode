# total sam

from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        i, res = 0, 0

        while i < len(prices):
            maxPrice = prices[i]
            j = i + 1
            while j < len(prices) and prices[j] > maxPrice:
                maxPrice = prices[j]
                j += 1
            res += maxPrice - prices[i]
            i = j    

        return res