// total sam

var pathSum = function (root, targetSum) {
    if (!root) return [];

    const res = [];
    const path = [];

    const dfs = (node, curSum) => {
        if (!node) return;

        path.push(node.val);
        curSum += node.val;

        if (!node.left && !node.right) {
            if (curSum === targetSum) {
                res.push([...path]);
            }
            path.pop();
            return;
        }

        dfs(node.left, curSum);
        dfs(node.right, curSum);
        path.pop();
    }

    dfs(root, 0);

    return res;
};