from typing import List


class Solution:
    def maxWidthRamp(self, nums: List[int]) -> int:
        max_right = [0] * len(nums)
        max_right[-1] = nums[-1]

        for i in range(len(nums) - 2, -1, -1):
            max_right[i] = max(nums[i], max_right[i + 1])

        res = 0
        l = 0
        for r in range(len(nums)):
            while nums[l] > max_right[r]:
                l += 1
            res = max(res, r - l)

        return res    