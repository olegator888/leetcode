from typing import List


class Solution:
    def maximumCandies(self, candies: List[int], k: int) -> int:
        total = sum(candies)

        if total < k:
            return 0
        
        l, r = 1, total // k
        res = 0

        while l <= r:
            m = (l + r) // 2
            count = 0

            for c in candies:
                count += c // m
                if count >= k:
                    break
            if count >= k:
                res = max(res, m)
                l = m + 1
            else:
                r = m - 1
        
        return res


        