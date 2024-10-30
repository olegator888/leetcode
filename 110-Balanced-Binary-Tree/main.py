# total sam

class Solution:
    def isBalanced(self, root) -> bool:
        def dfs(node):
            if not node: return [0, True]
            left, leftValid = dfs(node.left)
            right, rightValid = dfs(node.right)
            isValid = leftValid and rightValid and abs(left - right) <= 1
            return (1 + max(left, right), isValid)
        return dfs(root)[1]
        