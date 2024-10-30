from typing import List


class Solution:
    def maxMoves(self, grid: List[List[int]]) -> int:
      rows, cols = len(grid), len(grid[0])

      cache = {}

      def traverse(r, c, prev):
          if r == rows or r < 0 or c == cols or c < 0 or grid[r][c] <= prev:
            return 0
          
          if (r, c) in cache:
             return cache[(r, c)]
            
          cache[(r, c)] = 1 + max(
             traverse(r - 1, c + 1, grid[r][c]),
             traverse(r, c + 1, grid[r][c]),
             traverse(r + 1, c + 1, grid[r][c]),
          )

          return cache[(r, c)]
      
      res = 0

      for r in range(rows):
         res = max(res, traverse(r, 0))

      return res
          

        