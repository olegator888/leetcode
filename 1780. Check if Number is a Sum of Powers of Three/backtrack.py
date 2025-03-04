class Solution:
    def checkPowersOfThree(self, n: int) -> bool:
        def backtrack(i, cur):
            if cur == n:
                return True
            if cur > n or 3**i > n:
                return False
            # include or skip
            return backtrack(i+1, cur + 3**i) or backtrack(i+1, cur)
        return backtrack(0, 0)