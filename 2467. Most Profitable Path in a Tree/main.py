# total sam

from collections import defaultdict
from typing import List


class Solution:
    def mostProfitablePath(self, edges: List[List[int]], bob: int, amount: List[int]) -> int:
        # bob can travel only one way - because he moves towards 0 and because tree has no cycles

        # run dfs for bob and create map node -> time that shows visit time for each node in bob's path

        # run dfs as alice, keep track of time. check bob's time at that node
        # if alice's time == bob's time - divide by 2
        # if alice's time > bob's time - gate is already open and alice doesn't have to pay nothing

        # get max alice's income after traversal

        adj = defaultdict(list)
        for u, v in edges:
            adj[u].append(v)
            adj[v].append(u)

        bob_node_time = defaultdict(int)

        visit = set([bob])

        # as we traverse the tree, we will try every possible way bob can go
        # but we want to save node -> time pair only for valid nodes in the path
        # how to determine if node is valid? 
        # let this fn return bool value: true if path is valid and false otherwise
        def bob_travel(node, time):
            if node == 0:
                bob_node_time[node] = time
                return True
            for nei in adj[node]:
                if nei in visit: continue
                visit.add(nei)
                if bob_travel(nei, time + 1):
                    bob_node_time[node] = time
                    return True
                visit.remove(nei)    
            return False

        bob_travel(bob, 1)

        visit = set([0])

        def alice_travel(node, time, income):
            a = amount[node]
            bob_time = bob_node_time[node]
            if bob_time and bob_time < time:
                a = 0
            elif bob_time and bob_time == time:
                a //= 2
            income += a

            if all(x in visit for x in adj[node]):
                return income
            
            res = float("-inf")
            for nei in adj[node]:
                if nei in visit: continue
                visit.add(nei)
                res = max(res, alice_travel(nei, time + 1, income))
                visit.remove(nei)
            return res

        return alice_travel(0, 1, 0)    