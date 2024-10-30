// total sam

var isBalanced = function (root) {
    const dfs = (node) => {
        if (!node) return [0, true];
        const [left, leftValid] = dfs(node.left);
        const [right, rightValid] = dfs(node.right);
        return [1 + Math.max(left, right), Math.abs(left - right) <= 1 && leftValid && rightValid];
    }
    return dfs(root)[1];
};