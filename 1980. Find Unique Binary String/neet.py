from typing import List

class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        strSet = set(nums)
        def dfs(i, cur):
            if i == len(nums):
                res = "".join(cur)
                return None if res in strSet else res
            res = dfs(i + 1, cur)
            if res:
                return res
            cur[i] = "1"
            return dfs(i + 1, cur)
        
        return dfs(0, ["0"] * len(nums))