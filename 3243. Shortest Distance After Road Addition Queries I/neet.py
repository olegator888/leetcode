from collections import deque
from typing import List


class Solution:
    def shortestDistanceAfterQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        adj = [[i + 1] for i in range(n - 1)]

        def shortest_path():
            q = deque([(0, 0)])
            visit = set([0])

            while q:
                cur, length = q.popleft()
                if cur == n -1:
                    return length
                for nei in adj[cur]:
                    if nei in visit: continue
                    q.append((nei, length + 1))
                    visit.add(nei)
        
        res = []
        for src, dst in queries:
            adj[src].append(dst)
            res.append(shortest_path())

        return res