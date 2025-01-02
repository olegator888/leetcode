from typing import List


class Solution:
    def vowelStrings(self, words: List[str], queries: List[List[int]]) -> List[int]:
        def isValid(word):
            if not words: return False
            vowels = ['a', 'e', 'i', 'o', 'u']
            return word[0] in vowels and word[-1] in vowels

        prefix = [0] * (len(words) + 1)
        for i, w in enumerate(words):
            prefix[i+1] = prefix[i] + (1 if isValid(w) else 0)
        
        return [(prefix[r + 1] - prefix[l]) for l, r in queries]



        