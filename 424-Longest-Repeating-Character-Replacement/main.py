from collections import defaultdict


class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        # keep track of most frequent letter 
        # if window size > most frequent + k -> then shift left pointer
        res = 0
        cnt = defaultdict(int)
        mostFreq = 0
        l = 0
        for r in range(len(s)):
            cnt[s[r]] += 1
            mostFreq = max(mostFreq, cnt[s[r]])

            # we dont have to decrement mostFreq after deleting characters
            # because it won't affect our result 
            # because we're looking for maximum window
            while mostFreq + k < r - l + 1:
                cnt[s[l]] -= 1
                l += 1
            res = max(res, r - l + 1)        

        return res