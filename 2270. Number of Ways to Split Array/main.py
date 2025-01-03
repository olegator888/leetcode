from typing import List


class Solution:
    def waysToSplitArray(self, nums: List[int]) -> int:
        total = sum(nums)
        cur, res = 0, 0
        
        for n in nums[:-1]:
            cur += n
            if cur >= total - cur:
                res += 1

        return res
