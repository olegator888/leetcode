from typing import List


class Solution:
    def minZeroArray(self, nums: List[int], queries: List[List[int]]) -> int:
        zero_cnt = 0
        for n in nums:
            if n == 0:
                zero_cnt += 1
        if zero_cnt == len(nums):
            return 0
        
        for i, q in enumerate(queries):
            l, r, val = q
            for j in range(l, r + 1):
                if nums[j] == 0:
                    continue
                nums[j] = max(nums[j] - val, 0)
                if nums[j] == 0:
                    zero_cnt += 1
                if zero_cnt == len(nums):
                    return i + 1
        return -1            

        