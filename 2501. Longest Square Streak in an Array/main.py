from typing import List


class Solution:
    def longestSquareStreak(self, nums: List[int]) -> int:
        nums_set = set(nums)
        res = 0
        
        def checkNum(n):
            res = 1
            while n * n in nums_set:
                res += 1
                n *= n
            return res
        
        for n in nums:
            res = max(res, checkNum(n))

        return res if res >= 2 else -1