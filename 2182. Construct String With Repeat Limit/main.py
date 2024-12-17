from collections import Counter
import heapq


class Solution:
    def repeatLimitedString(self, s: str, repeatLimit: int) -> str:
        maxHeap = [(-ord(c), c, cnt) for c, cnt in Counter(s).items()]

        res = []

        while maxHeap:
            order, char, count = heapq.heappop(maxHeap)
            use = min(count, repeatLimit)
            res.append(char * use)

            if count > use and maxHeap:
                next_order, next_char, next_count = heapq.heappop(maxHeap)
                res.append(next_char)
                if next_count > 1:
                    heapq.heappush(maxHeap, (next_order, next_char, next_count - 1))
                heapq.heappush(maxHeap, (order, char, count - use))

        return "".join(res)
