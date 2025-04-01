from typing import List


class Solution:
    def mostPoints(self, questions: List[List[int]]) -> int:
        cache = {}

        def dfs(i):
            if i >= len(questions):
                return 0
            if i in cache:
                return cache[i]
            
            # include
            cache[i] = questions[i][0] + dfs(i + questions[i][1] + 1)

            # skip
            cache[i] = max(cache[i], dfs(i + 1))

            return cache[i]
        
        return dfs(0)