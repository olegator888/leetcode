import heapq
from typing import List


class Solution:
    def smallestChair(self, times: List[List[int]], targetFriend: int) -> int:
        times = [(t[0], t[1], i) for i, t in enumerate(times)]
        times.sort()

        used_chairs = [] # (leave time, chair)
        available_chairs = [i for i in range(len(times))] # chair

        for a, l, i in times:
            while used_chairs and used_chairs[0][0] <= a:
                heapq.heappush(available_chairs, heapq.heappop(used_chairs)[1])

            chair = heapq.heappop(available_chairs)

            if i == targetFriend:
                return chair

            heapq.heappush(used_chairs, (l, chair))

