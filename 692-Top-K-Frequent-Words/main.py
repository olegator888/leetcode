# total sam

from collections import Counter
from typing import List


class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        freq = [[] for _ in range(len(words) + 1)]
        words_count = Counter(words)
        for word, cnt in words_count.items():
            freq[cnt].append(word)

        res = []

        for i in range(len(freq) - 1, 0, -1):
            words = freq[i]
            if words:
                words.sort()
                for w in words:
                    res.append(w)
                    if len(res) == k:
                        return res 