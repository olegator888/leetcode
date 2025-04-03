from typing import List


class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        res, dmax, imax = 0, 0, 0
        for k in range(len(nums)):
            res = max(dmax * nums[k])
            dmax = max(imax - nums[k])
            imax = max(imax, nums[k])
        return res