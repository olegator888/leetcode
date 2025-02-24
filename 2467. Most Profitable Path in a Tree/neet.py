from collections import defaultdict, deque
from typing import List


class Solution:
    def mostProfitablePath(self, edges: List[List[int]], bob: int, amount: List[int]) -> int:
        adj = defaultdict(list)
        for v1, v2 in edges:
            adj[v1].append(v2)
            adj[v2].append(v1)
        
        # bob simulation - dfs
        bob_times = {} # node on root path -> time
        def dfs(node, prev, time):
            if node == 0:
                bob_times[node] = time
                return True
            for nei in adj[node]:
                if nei == prev: continue
                if dfs(nei, node, time + 1):
                    bob_times[node] = time
                    return True
            return False

        dfs(bob, -1, 0)

        # alice simulation - bfs
        q = deque([(0, 0, -1, amount[0])]) #(node, time, prev, total profit)
        res = float("-inf")

        while q:
            node, time, prev, profit = q.popleft()
            for nei in adj[node]:
                if nei == prev: continue
                nei_profit, nei_time = amount[nei], time + 1
                if nei in bob_times:
                    if nei_time > bob_times[nei]:
                        nei_profit = 0
                    if nei_time == bob_times[nei]:
                        nei_profit //= 2
                q.append((nei, nei_time, node, profit + nei_profit))
                if len(adj[nei]) == 1:
                    res = max(res, profit + nei_profit)

        return res