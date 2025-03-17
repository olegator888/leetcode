from typing import Counter, List


class Solution:
    def divideArray(self, nums: List[int]) -> bool:
        cnt = Counter(nums)
        for v in cnt.values():
            if v % 2: return False
        return True