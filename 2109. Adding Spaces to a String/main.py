from typing import List

class Solution:
    def addSpaces(self, s: str, spaces: List[int]) -> str:
        spaces_set = set([str(n) for n in spaces])
        res = []

        for i in range(len(s)):
            if str(i) in spaces_set: res.append(" ")
            res.append(s[i])

        return "".join(res)
