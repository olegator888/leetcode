# sam

from collections import defaultdict
import heapq
from typing import List


class Solution:
    def minimumObstacles(self, grid: List[List[int]]) -> int:
        rows, cols = len(grid), len(grid[0])
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        
        min_heap = [[0, (0, 0)]] # [cost, (r, c)]
        visit = set([(0, 0)])

        while min_heap:
            cost, node = heapq.heappop(min_heap)
            r, c = node
            if r == rows - 1 and c == cols - 1:
                return cost
            
            for dr, dc in directions:
                row, col = r + dr, c + dc
                if (row, col) in visit or row not in range(rows) or col not in range(cols): continue
                heapq.heappush(min_heap, [cost + grid[row][col], (row, col)])
                visit.add((row, col))

