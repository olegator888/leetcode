from typing import List


class Solution:
    def longestMonotonicSubarray(self, nums: List[int]) -> int:
        cur = 1
        res = 1
        direction = 0

        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                if direction > 0:
                    cur += 1
                else:
                    cur = 2
                    direction = 1
            elif nums[i] < nums[i - 1]:
                if direction < 0:
                    cur += 1
                else:
                    cur = 2
                    direction = -1
            else:
                cur = 1
                direction = 0
            res = max(res, cur)

        return res
        