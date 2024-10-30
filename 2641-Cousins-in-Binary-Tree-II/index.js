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
 * @return {TreeNode}
 */
var replaceValueInTree = function (root) {
  if (!root) return null;

  const levelSum = {};

  const getLevelSum = (node, level) => {
    if (!node) return;
    levelSum[level] = (levelSum[level] || 0) + node.val;
    getLevelSum(node.left, level + 1);
    getLevelSum(node.right, level + 1);
  };

  getLevelSum(root, 0);

  const replaceNodesValues = (node, level) => {
    if (!node) return;

    const oldLeft = node.left?.val || 0;
    const oldRight = node.right?.val || 0;
    const siblingsSum = oldLeft + oldRight;

    if (node.left) {
      node.left.val = levelSum[level + 1] - siblingsSum;
      replaceNodesValues(node.left, level + 1);
    }

    if (node.right) {
      node.right.val = levelSum[level + 1] - siblingsSum;
      replaceNodesValues(node.right, level + 1);
    }
  };

  replaceNodesValues(root, 0);

  root.val = 0;

  return root;
};
