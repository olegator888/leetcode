# sam

from typing import List


class Solution:
    def maxMatrixSum(self, matrix: List[List[int]]) -> int:
        rows, cols = len(matrix), len(matrix[0])
        negatives, total, smallest = 0, 0, float("inf")

        for r in range(rows):
            for c in range(cols):
                n = abs(matrix[r][c])
                total += n
                smallest = min(smallest, n)
                if matrix[r][c] < 0:
                    negatives += 1
        
        return total if negatives % 2 == 0 else total - smallest * 2