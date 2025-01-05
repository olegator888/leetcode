from collections import Counter


class Solution:
    def countPalindromicSubsequence(self, s: str) -> int:
        res = set() # (mid_c, outer_c)
        left = set()
        right = Counter(s)

        for m in s:
            right[m] -= 1
            for c in left:
                if right[c] > 0:
                    res.add((m, c))
            left.add(m)

        return len(res)