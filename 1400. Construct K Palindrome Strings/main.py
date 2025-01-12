from collections import Counter


class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
        if len(s) < k:
            return False

        s_cnt = Counter(s)
        odd_count = 0
        for v in s_cnt.values():
            if v % 2:
                odd_count += 1
        
        return odd_count <= k

 