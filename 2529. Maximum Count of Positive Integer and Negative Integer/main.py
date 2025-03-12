from typing import List


class Solution:
    def maximumCount(self, nums: List[int]) -> int:
        neg = 0
        for i in range(len(nums)):
            if nums[i] < 0: neg += 1
            if nums[i] > 0:
                return max(neg, len(nums) - i)
        return neg