# total sam

from collections import Counter
from typing import List


class Solution:
    def dividePlayers(self, skill: List[int]) -> int:
        total_skill = sum(skill)
        pairs_amount = len(skill) / 2
        pair_skill = total_skill / pairs_amount
        cnt = Counter(skill)

        res = 0
        for cur in skill:
            if cnt[cur] == 0: continue
            diff = pair_skill - cur
            if cnt[diff] == 0: return -1
            res += cur * diff
            cnt[cur] -= 1
            cnt[diff] -= 1

        return res