import heapq
from typing import List


class Solution:
    def shortestSubarray(self, nums: List[int], k: int) -> int:
        res = float("inf")
        cur_sum = 0
        min_heap = []

        for r in range(len(nums)):
            cur_sum += nums[r]
            if cur_sum >= k:
                res = min(res, r + 1)
            while min_heap and cur_sum - min_heap[0][0] >= k:
                _, end_idx = heapq.heappop(min_heap)
                res = min(res, r - end_idx)
            heapq.heappush(min_heap, (cur_sum, r))
        
        return res if res != float("inf") else -1