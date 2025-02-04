from typing import List


class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        res = nums[0]
        cur = nums[0]
        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                cur += nums[i]
            else:
                cur = nums[i]
            res = max(res, cur)    
        return res