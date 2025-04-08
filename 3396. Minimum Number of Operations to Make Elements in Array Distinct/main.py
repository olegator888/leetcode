from collections import defaultdict
from math import ceil
from typing import List


class Solution:
    def minimumOperations(self, nums: List[int]) -> int:
        cnt = defaultdict(int)
        idx = -1
        for i in range(len(nums) - 1, -1, -1):
            cnt[nums[i]] += 1
            if cnt[nums[i]] == 2:
                idx = i
                break
        return ceil((idx + 1) / 3)