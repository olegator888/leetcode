from collections import defaultdict
from typing import Counter, List


class Solution:
    def minimumIndex(self, nums: List[int]) -> int:
        cnt = defaultdict(int)
        dominant = 0
        for n in nums:
            cnt[n] += 1
            if cnt[n] > len(nums) / 2:
                dominant = n
        
        have = 0
        for i in range(len(nums)):
            if nums[i] != dominant:
                continue
            have += 1
            left = cnt[dominant] - have
            if have > (i + 1) / 2 and left > (len(nums) - i - 1) / 2:
                return i

        return -1        