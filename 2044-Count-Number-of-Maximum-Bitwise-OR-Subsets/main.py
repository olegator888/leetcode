from typing import List


class Solution:
    def countMaxOrSubsets(self, nums: List[int]) -> int:
        max_or = 0
        for n in nums:
            max_or |= n

        def helper(i, current):
            if i == len(nums):
                return 1 if current == max_or else 0
            
            return helper(i + 1, current | nums[i]) + helper(i + 1, current)
                
        return helper(0, 0)    