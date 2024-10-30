from typing import List


class Solution:
    def arrayRankTransform(self, arr: List[int]) -> List[int]:
        rank_map = {}
        rank = 1
        for n in sorted(arr):
            if n in rank_map: continue
            rank_map[n] = rank
            rank += 1
        res = []
        for n in arr:
            res.append(rank_map[n])
        return res    