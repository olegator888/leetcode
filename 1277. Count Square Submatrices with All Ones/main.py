from typing import List


class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        rows, cols = len(matrix), len(matrix[0])
        res = 0

        def helper(r, c, length):
            for i in range(length):
                for j in range(length):
                    if r + i == rows or c + j == cols or matrix[r + i][c + j] != 1:
                        return 0
            return 1 + helper(r, c, length + 1)    
        
        for r in range(rows):
            for c in range(cols):
                res += helper(r, c, 1)

        return res