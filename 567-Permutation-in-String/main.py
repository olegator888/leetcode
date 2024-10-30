# total sam

from collections import Counter, defaultdict


class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s2) < len(s1):
            return False  

        s1Cnt = Counter(s1)
        window = defaultdict(int)
        total = len(s1Cnt)
        valid = 0

        for i in range(len(s1)):
            window[s2[i]] += 1
            if window[s2[i]] == s1Cnt[s2[i]]:
                valid += 1
            if s1Cnt[s2[i]] and window[s2[i]] - 1 == s1Cnt[s2[i]]:
                valid -= 1  

        if valid == total:
            return True        

        l = 0
        for r in range(len(s1), len(s2)):
            left = s2[l]
            if s1Cnt[left] and window[left] - 1 == s1Cnt[left]:
                valid += 1
            if s1Cnt[left] and window[left] == s1Cnt[left]:
                valid -= 1
            window[left] -= 1
            l += 1

            right = s2[r]
            if s1Cnt[right] and window[right] + 1 == s1Cnt[right]:
                valid += 1
            if s1Cnt[right] and window[right] == s1Cnt[right]:
                valid -= 1
            window[right] += 1

            if valid == total:
                return True                

        return False