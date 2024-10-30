from typing import List


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        directions = [(-1, 0), (1, 0), (0, 1), (0, -1)]
        islands = 0
        rows, cols = len(grid), len(grid[0])

        def bfs(r, c):
            q = [(r, c)]

            while q:
                r, c = q.pop()
                grid[r][c] = "*"
                for dr, dc in directions:
                    row, col = r + dr, c + dc
                    if row < 0 or row == rows or col < 0 or col == cols or grid[row][col] != "1":
                        continue
                    q.append((row, col))

        for r in range(rows):
            for c in range(cols):
                if grid[r][c] == "1":
                    islands += 1
                    bfs(r, c)

        return islands