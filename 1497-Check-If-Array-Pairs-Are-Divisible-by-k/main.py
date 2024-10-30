from collections import defaultdict
from typing import List


class Solution:
    def canArrange(self, arr: List[int], k: int) -> bool:
        cnt = defaultdict(int)

        for n in arr:
            reminder = (n % k + k) % k # handle negative values
            cnt[reminder] += 1

        for n in arr:
            reminder = (n % k + k) % k # handle negative values
            diff = k - reminder  

            if reminder == 0:
                if cnt[reminder] % 2: return False
            elif cnt[reminder] != cnt[diff]: return False

        return True    