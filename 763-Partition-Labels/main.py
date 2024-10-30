from typing import List


class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        last_idx = {}
        for i, c in enumerate(s):
            last_idx[c] = i

        res = []
        last = -1
        totalSize = 0

        for i in range(len(s)):
            last = max(last, last_idx[s[i]])
            if i == last:
                size = i - totalSize + 1
                totalSize += size
                res.append(size)

        return res    