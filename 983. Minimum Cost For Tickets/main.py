from typing import List


class Solution:
    def mincostTickets(self, days: List[int], costs: List[int]) -> int:
        cache = {}

        def dfs(i):
            if i == len(days):
                return 0
            
            if i in cache:
                return cache[i]
            
            res = float('inf')
            for cost, duration in zip(costs, [1, 7, 30]):
                j = i 
                while j < len(days) and days[j] < days[i] + duration:
                    j += 1
                res = min(res, cost + dfs(j))
            
            cache[i] = res
            return res
        
        return dfs(0)
        