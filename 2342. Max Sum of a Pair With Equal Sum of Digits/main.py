from collections import defaultdict
import heapq
from typing import List


class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        groups = defaultdict(list)

        def get_integer_sum(n):
            res = 0
            for c in str(n):
                res += int(c)
            return res
        
        for n in nums:
            heapq.heappush(groups[get_integer_sum(n)], -n)
        
        res = 0

        for values in groups.values():
            if len(values) >= 2:
                x, y = -heapq.heappop(values), -heapq.heappop(values)
                res = max(res, x + y)

        return res if res > 0 else -1
        