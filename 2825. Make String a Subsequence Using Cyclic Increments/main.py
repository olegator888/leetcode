import string

class Solution:
    def canMakeSubsequence(self, str1: str, str2: str) -> bool:
        letters = string.ascii_lowercase

        def next(char):
            code = ord(char) - ord("a")
            nextCode = code + 1 if code < 25 else 0
            return letters[nextCode]
        
        i, j = 0, 0
        while i < len(str1) and j < len(str2):
            if str1[i] == str2[j] or next(str1[i]) == str2[j]:
                j += 1
            i += 1

        return j == len(str2)