from collections import defaultdict
from typing import List


class Solution:
    def countSquares(self, matrix: List[List[int]]) -> int:
        rows, cols = len(matrix), len(matrix[0])
        dp = defaultdict(int)

        res = 0

        for r in range(rows):
            cur_dp = defaultdict(int)
            for c in range(cols):
                if matrix[r][c] == 1:
                    cur_dp[c] = 1 + min(
                        dp[c],
                        cur_dp[c - 1],
                        dp[c - 1]
                    )
                    res += cur_dp[c]
            dp = cur_dp        

        return res
            