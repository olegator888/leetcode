# total sam

from typing import List, Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> List[List[int]]:
        if not root: return []

        res = []
        path = []

        def dfs(node, curSum):
            if not node: return

            path.append(node.val)
            curSum += node.val
            if not node.left and not node.right:
                if curSum == targetSum:
                    res.append(path.copy())
                path.pop()    
                return    
            
            dfs(node.left, curSum)
            dfs(node.right, curSum)
            path.pop()

        dfs(root, 0)    

        return res