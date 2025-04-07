from typing import List


class Solution:
    def canPartition(self, nums: List[int]) -> bool:
        if sum(nums) % 2:
            return False
        dp = set()
        dp.add(0)
        target = sum(nums) // 2
        for i in range(len(nums)):
            nextDP = set(dp)
            for t in dp:
                nextDP.add(t + nums[i])
            dp = nextDP
        return target in dp
