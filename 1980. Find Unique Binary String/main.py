# total sam

from typing import List

class Solution:
    def findDifferentBinaryString(self, nums: List[str]) -> str:
        n = len(nums)
        nums = set(nums)

        def dfs(str):
            if str in nums:
                return ""
            if len(str) == n:
                return str
            return dfs(str + "1") or dfs(str + "0")

        return dfs("")