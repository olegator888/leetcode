# sam

import heapq


class Solution:
    def longestDiverseString(self, a: int, b: int, c: int) -> str:
        maxHeap = []
        if a > 0: maxHeap.append((-a, "a"))
        if b > 0: maxHeap.append((-b, "b"))
        if c > 0: maxHeap.append((-c, "c"))
        heapq.heapify(maxHeap)

        res = []

        while maxHeap:
            count, char = heapq.heappop(maxHeap)
            count = -1 * count

            if len(res) > 1 and res[-1] == res[-2] == char:
                if maxHeap:
                    nextCount, nextChar = heapq.heappop(maxHeap)
                    nextCount = -1 * nextCount
                    res.append(nextChar)
                    nextCount -= 1
                    if nextCount:
                        heapq.heappush(maxHeap, (-nextCount, nextChar))
                    heapq.heappush(maxHeap, (-count, char))      
            else:
                for _ in range(min(count, 2)):
                    res.append(char)
                count -= 2
                if count > 0:
                    heapq.heappush(maxHeap, (-count, char))  
                      
        return "".join(res)    