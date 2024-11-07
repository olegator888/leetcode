from typing import List


class Solution:
    def largestCombination(self, candidates: List[int]) -> int:
        res = 0
        
        for i in range(32):
            cnt = 0
            for n in candidates:
                if (1 << i) & n:
                    cnt += 1
            res = max(res, cnt)

        return res
        