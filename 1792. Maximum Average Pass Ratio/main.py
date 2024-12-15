from typing import List
import heapq


class Solution:
    def maxAverageRatio(self, classes: List[List[int]], extraStudents: int) -> float:
        def gain(p, t):
            return (p + 1) / (t + 1) - p / t
        
        max_heap = [(-gain(p, t), p, t) for p, t in classes]
        heapq.heapify(max_heap)

        for _ in range(extraStudents):
            g, p, t = heapq.heappop(max_heap)
            g = -g
            p, t = p + 1, t + 1
            newG = -gain(p, t)
            heapq.heappush(max_heap, (newG, p, t))
        
        totalPass = 0
        for _, p, t in max_heap:
            totalPass += p / t

        return totalPass / len(max_heap)
        


        