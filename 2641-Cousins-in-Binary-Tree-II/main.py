from collections import defaultdict
from typing import Optional


# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def replaceValueInTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        levelSum = defaultdict(int)

        def getLevelSum(node, level):
            if not node: return
            levelSum[level] += node.val
            getLevelSum(node.left, level + 1)
            getLevelSum(node.right, level + 1)

        getLevelSum(root, 0)

        def replaceNodesValues(node, level):
            if not node: return
            oldLeft = node.left.val if node.left else 0
            oldRight = node.right.val if node.right else 0
            siblingsSum = oldLeft + oldRight

            if node.left:
                node.left.val = levelSum[level + 1] - siblingsSum
                replaceNodesValues(node.left, level + 1)
            if node.right:
                node.right.val = levelSum[level + 1] - siblingsSum
                replaceNodesValues(node.right, level + 1)
        
        replaceNodesValues(root, 0)
        root.val = 0
        return root
