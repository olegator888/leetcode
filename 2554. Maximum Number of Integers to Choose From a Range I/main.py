from typing import List


class Solution:
    def maxCount(self, banned: List[int], n: int, maxSum: int) -> int:
        banned = set(banned)

        res = 0
        total = 0

        for n in range(1, n + 1):
            if n in banned: continue
            total += n
            if total > maxSum: break
            res += 1

        return res
        