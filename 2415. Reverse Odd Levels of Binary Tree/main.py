from typing import Optional
from collections import deque



# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def reverseOddLevels(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        level = 0
        q = deque([root])

        while q:
            values, level_nodes = [], []

            for _ in range(len(q)):
                node = q.popleft()
                level_nodes.append(node)
                values.append(node.val)
            
            if level % 2:
                values.reverse()
                for i, n in enumerate(values):
                    level_nodes[i].val = n
            
            for node in level_nodes:
                if not node.left: break
                q.append(node.left)
                q.append(node.right)
            
            level += 1

        return root
        