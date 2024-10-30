from collections import Counter
from typing import List


class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq = [[] for _ in range(len(nums) + 1)]
        count = Counter(nums)
        for n, cnt in count.items():
            freq[cnt].append(n)

        res = []
        for i in range(len(freq) - 1, 0, -1):
            if freq[i]:
                for n in freq[i]:
                    res.append(n)
                    if len(res) == k:
                        return res    