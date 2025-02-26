# total sam

from typing import List


class Solution:
    def maxAbsoluteSum(self, nums: List[int]) -> int:
        max_positive, min_negative = nums[0], nums[0]
        prefix = [[n, n] for n in nums]
        for i in range(1, len(nums)):
            prefix[i][0] = max(prefix[i][0], prefix[i - 1][0] + nums[i])
            max_positive = max(max_positive, prefix[i][0])
            prefix[i][1] = min(prefix[i][1], prefix[i - 1][1] + nums[i])
            min_negative = min(min_negative, prefix[i][1])

        return max(max_positive, -min_negative)