# total sam

# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
from typing import Optional


class Solution:
    def find_children(self, i, depth, traversal):
            children, cur, j = [], 0, i
            while j < len(traversal):
                if traversal[j] == "-":
                    cur += 1
                    j += 1
                    continue
                if cur and cur < depth:
                    break # we go up - this means that there is no more children for current node
                if cur == depth:
                    k = j
                    while k < len(traversal) and traversal[k] != "-":
                        k += 1
                    children.append(j)
                    j = k - 1
                cur = 0 
                j += 1
            while len(children) < 2:
                children.append(None)
            return children

    def recoverFromPreorder(self, traversal: str) -> Optional[TreeNode]:
        def recover(i, depth):
            j = i
            while j < len(traversal) and traversal[j] != "-":
                j += 1
            val = int(traversal[i:j])
            node = TreeNode(val)
            left, right = self.find_children(j, depth, traversal)
            if left: node.left = recover(left, depth + 1)
            if right: node.right = recover(right, depth + 1)
            return node
        return recover(0, 1)


