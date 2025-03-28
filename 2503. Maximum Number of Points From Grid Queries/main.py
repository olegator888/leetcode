import heapq
from typing import List


class Solution:
    def maxPoints(self, grid: List[List[int]], queries: List[int]) -> List[int]:
        directions = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        queries_sorted = sorted([(q, i) for i, q in enumerate(queries)])

        n, m = len(grid), len(grid[0])
        count = 0
        ans = [0] * len(queries)

        visit = set([(0, 0)])
        min_heap = [(grid[0][0], 0, 0)]

        for q, idx in queries_sorted:
            while min_heap and min_heap[0][0] < q:
                _, r, c = heapq.heappop(min_heap)
                count += 1
                for row, col in [(r + dr, c + dc) for dr, dc in directions]:
                    if row not in range(n) or col not in range(m) or (row, col) in visit:
                        continue
                    visit.add((row, col))
                    heapq.heappush(min_heap, (grid[row][col], row, col))
            ans[idx] = count

        return ans