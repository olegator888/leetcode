# total sam

from collections import defaultdict, Counter
from typing import List


class Solution:
    def findAnagrams(self, s: str, p: str) -> List[int]:
        if len(s) < len(p): return []

        cnt = Counter(p)
        window = defaultdict(int)
        totalLetters, validLetters = len(cnt), 0
        res = []

        for i in range(len(p)):
            window[s[i]] += 1
            if not s[i] in cnt: continue
            if window[s[i]] == cnt[s[i]]: validLetters += 1
            if window[s[i]] == cnt[s[i]] + 1: validLetters -= 1

        if validLetters == totalLetters: res.append(0)

        l = 0
        for r in range(len(p), len(s)):
            leftChar = s[l]
            rightChar = s[r]

            # removing left char
            if leftChar in cnt:
                if cnt[leftChar] == window[leftChar]: validLetters -= 1
                if cnt[leftChar] == window[leftChar] - 1: validLetters += 1
            window[leftChar] -= 1
            l += 1    

            # adding right char    
            if rightChar in cnt:
                if cnt[rightChar] == window[rightChar]: validLetters -= 1
                if cnt[rightChar] == window[rightChar] + 1: validLetters += 1
            window[rightChar] += 1

            if validLetters == totalLetters: res.append(l)

        return res    
