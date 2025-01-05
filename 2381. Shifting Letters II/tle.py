# total sam

import string
from typing import List


class Solution:
    def shiftingLetters(self, s: str, shifts: List[List[int]]) -> str:
        letters = list(string.ascii_lowercase)

        char_shift = [0] * len(s)

        for l, r, d in shifts:
            diff = 1 if d else -1
            for i in range(l, r+1):
                char_shift[i] += diff
        
        res = [None] * len(s)

        for i in range(len(s)):
            newOrd = (ord(s[i]) - ord('a') + 26 + char_shift[i]) % 26 
            res[i] = letters[newOrd]
        
        return "".join(res)


        