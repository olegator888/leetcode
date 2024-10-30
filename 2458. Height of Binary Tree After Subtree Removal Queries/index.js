/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} queries
 * @return {number[]}
 */
var treeQueries = function (root, queries) {
  const resultMap = {};
  const heightCash = {};

  const height = (node) => {
    if (!node) return -1;

    if (heightCash[node.val] !== undefined) {
      return heightCash[node.val];
    }

    const res = 1 + Math.max(height(node.left), height(node.right));
    heightCash[node.val] = res;
    return res;
  };

  const dfs = (node, depth, maxVal) => {
    if (!node) return;

    resultMap[node.val] = maxVal;

    dfs(node.left, depth + 1, Math.max(maxVal, depth + 1 + height(node.right)));
    dfs(node.right, depth + 1, Math.max(maxVal, depth + 1 + height(node.left)));
  };

  dfs(root, 0, 0);

  return queries.map((query) => resultMap[query]);
};
