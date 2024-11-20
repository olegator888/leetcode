from collections import defaultdict


class Solution:
    def takeCharacters(self, s: str, k: int) -> int:
        keys = "abc"
        cnt = defaultdict(int)
        for c in s:
            cnt[c] += 1
        
        for c in keys:
            if cnt[c] < k: return -1
        
        window = defaultdict(int)
        longest, l = 0, 0

        def isWindowValid():
            for c in keys:
                if cnt[c] - window[c] < k:
                    return False
            return True

        for r in range(len(s)):
            window[s[r]] += 1
            while not isWindowValid():
                window[s[l]] -= 1
                l += 1
            longest = max(longest, r - l + 1)

        return len(s) - longest