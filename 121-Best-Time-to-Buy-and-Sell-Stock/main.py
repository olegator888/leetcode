from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minPrice = float("inf")
        res = 0

        for price in prices:
            res = max(res, price - minPrice)
            minPrice = min(minPrice, price)

        return res
        