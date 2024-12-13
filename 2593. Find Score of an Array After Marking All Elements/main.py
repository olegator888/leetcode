from typing import List
import heapq


class Solution:
    def findScore(self, nums: List[int]) -> int:
        marked = set()
        minHeap = []
        score = 0

        for i, n in enumerate(nums):
            heapq.heappush(minHeap, (n, i))
        
        while minHeap:
            while minHeap and minHeap[0][1] in marked:
                heapq.heappop(minHeap)
            
            if not minHeap: break
            
            n, i = heapq.heappop(minHeap) 
            marked.add(i)
            marked.add(i - 1)
            marked.add(i + 1)
            score += n
        
        return score

        