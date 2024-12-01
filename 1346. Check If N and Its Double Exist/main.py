from typing import List
from collections import defaultdict

class Solution:
    def checkIfExist(self, arr: List[int]) -> bool:
        cnt = defaultdict(int)
        for n in arr:
            cnt[n] += 1
            if n == 0 and cnt[n] > 1 or n != 0 and (cnt[n * 2] or cnt[n / 2]): return True
        return False
