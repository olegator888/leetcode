from collections import deque
from typing import List


class Solution:
    def shortestDistanceAfterQueries(self, n: int, queries: List[List[int]]) -> List[int]:
        graph = {}
        for i in range(n - 1):
            graph[i] = [i + 1]

        def find_path():
            q = deque([(0, 0)]) # node, path_length
            visit = set([0])

            while q:
                node, path_length = q.popleft()
                if node == n - 1:
                    return path_length
                for nei in graph[node]:
                    if nei in visit: continue
                    q.append((nei, path_length + 1))
                    visit.add(nei)
        
        res = []
        for u, v in queries:
            graph[u].append(v)
            res.append(find_path())
        
        return res