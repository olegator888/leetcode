from typing import List


class Solution:
    def minOperations(self, grid: List[List[int]], x: int) -> int:
        # 1. Check all remainders
        # 2. Flatten and sort the input
        # 3. Prefix sum / suffix sum

        for row in grid:
            for n in row:
                if n % x != grid[0][0] % x:
                    return -1
        
        nums = sorted([n for row in grid for n in row])

        prefix = 0
        total = sum(nums)
        res = float("inf")

        for i in range(len(nums)):
            cost_left = nums[i] * i - prefix
            cost_right = total - prefix - nums[i] * (len(nums) - i)
            res = min(res, (cost_left + cost_right) // x)
            prefix += nums[i]
        
        return res
        
