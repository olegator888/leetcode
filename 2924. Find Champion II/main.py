from typing import List


class Solution:
    def findChampion(self, n: int, edges: List[List[int]]) -> int:
        teams = set([i for i in range(n)])
        for _, team in edges:
            if team in teams:
                teams.remove(team)
        return next(iter(teams)) if len(teams) == 1 else -1
        