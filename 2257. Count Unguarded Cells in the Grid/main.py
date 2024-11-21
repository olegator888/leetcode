from typing import List


class Solution:
    def countUnguarded(self, m: int, n: int, guards: List[List[int]], walls: List[List[int]]) -> int:
        grid = [[0] * n for _ in range(m)]
        for r, c in walls:
            grid[r][c] = "w"
        for r, c in guards:
            grid[r][c] = "g"

        for r, c in guards:
            # right
            for i in range(c + 1, n):
                if grid[r][i] == 1:
                    continue
                if grid[r][i] == "w" or grid[r][i] == "g":
                    break
                grid[r][i] = 1
            
            # down
            for i in range(r + 1, m):
                if grid[i][c] == 1:
                    continue
                if grid[i][c] == "w" or grid[i][c] == "g":
                    break
                grid[i][c] = 1

            # left
            for i in range(c - 1, -1, -1):
                if grid[r][i] == 1:
                    continue
                if grid[r][i] == "w" or grid[r][i] == "g":
                    break
                grid[r][i] = 1
            
            # up
            for i in range(r - 1, -1, -1):
                if grid[i][c] == 1:
                    continue
                if grid[i][c] == "w" or grid[i][c] == "g":
                    break
                grid[i][c] = 1
        
        res = 0
        for r in range(m):
            for c in range(n):
                if grid[r][c] == 0:
                    res += 1
        
        return res