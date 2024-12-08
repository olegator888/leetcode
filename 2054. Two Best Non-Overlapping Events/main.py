import heapq
from typing import List


class Solution:
    def maxTwoEvents(self, events: List[List[int]]) -> int:
        events.sort()

        minHeap = [] # (end, value)
        maxVal, res = 0, 0

        for event in events:
            while minHeap and minHeap[0][0] < event[0]:
                maxVal = max(maxVal, heapq.heappop(minHeap)[1])
            
            res = max(res, maxVal + event[2])

            heapq.heappush((event[1], event[2]))
        
        return res

        