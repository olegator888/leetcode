from typing import List


class Solution:
    def leftmostBuildingQueries(self, heights: List[int], queries: List[List[int]]) -> List[int]:
        res = [-1] * len(queries)

        for i, q in enumerate(queries):
            l, r = sorted(q)

            if l == r or heights[r] > heights[l]:
                res[i] = r
                continue
            
            for j in range(r + 1, len(heights)):
                if heights[j] > max(heights[l], heights[r]):
                    res[i] = j
                    break
        
        return res