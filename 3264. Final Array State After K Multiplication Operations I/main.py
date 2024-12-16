from typing import List
import heapq


class Solution:
    def getFinalState(self, nums: List[int], k: int, multiplier: int) -> List[int]:
      minHeap = [(n, i) for i, n in enumerate(nums)]
      heapq.heapify(minHeap)

      while k:
        n, i = heapq.heappop(minHeap)
        heapq.heappush(minHeap, (n * multiplier, i))
        k -= 1
      
      res = [0] * len(nums)
      for n, i in minHeap:
         res[i] = n
      
      return res
        