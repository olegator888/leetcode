from typing import List


class Solution:
    def leftmostBuildingQueries(self, heights: List[int], queries: List[List[int]]) -> List[int]:
        res = []

        for x, y in queries:
            if x > y:
                x, y = y, x
            
            if x == y or heights[y] > heights[x]:
                res.append(y)
                continue

            max_val = max(heights[x], heights[y])
            found = False

            for i in range(y + 1, len(heights)):
                if heights[i] > max_val:
                    found = True
                    res.append(i)
                    break
            
            if not found:
                res.append(-1)

        return res