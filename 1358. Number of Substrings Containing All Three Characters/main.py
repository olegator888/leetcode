from collections import defaultdict


class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        cnt = defaultdict(int)
        res = 0

        l = 0
        for r in range(len(s)):
            cnt[s[r]] += 1
            while len(cnt) == 3:
                res += len(s) - r
                cnt[s[l]] -= 1
                if cnt[s[l]] == 0:
                    cnt.pop(s[l])
                l += 1

        return res