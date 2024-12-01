# total sam )))

import heapq
from typing import List


class Solution:
    def smallestChair(self, times: List[List[int]], targetFriend: int) -> int:
        chairs_heap = [i for i in range(len(times))]

        leave_heap = []

        times = [(t[0], t[1], i) for i, t in enumerate(times)]
        times.sort()

        for i in range(len(times)):
            while leave_heap and leave_heap[0][0] <= times[i][0]:
                heapq.heappush(chairs_heap, heapq.heappop(leave_heap)[1])

            if times[i][2] == targetFriend:
                return heapq.heappop(chairs_heap)

            heapq.heappush(leave_heap, (times[i][1], heapq.heappop(chairs_heap)))
