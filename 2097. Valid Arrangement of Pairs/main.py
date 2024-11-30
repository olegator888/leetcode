from collections import defaultdict, deque
from typing import List


class Solution:
    def validArrangement(self, pairs: List[List[int]]) -> List[List[int]]:
        graph = defaultdict(deque)
        inDegree, outDegree = defaultdict(int), defaultdict(int)

        for start, end in pairs:
            graph[start].append(end)
            outDegree[start] += 1
            inDegree[end] += 1
        
        startNode = -1
        for node in outDegree:
            if outDegree[node] == inDegree[node] + 1:
                startNode = node
                break
        
        if startNode == -1:
            startNode = pairs[0][0]
        
        res = []

        def dfs(node):
            while graph[node]:
                nextNode = graph[node].popleft()
                dfs(nextNode)
            res.append(node)

        dfs(startNode)    
        
        res.reverse()

        return [[res[i - 1], res[i]] for i in range(1, len(res))]

        