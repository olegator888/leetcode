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
var reverseOddLevels = function (root) {
  const q = [root];
  let level = 0;

  while (q.length > 0) {
    const len = q.length;
    const values = [];
    const levelNodes = [];

    for (let i = 0; i < len; i++) {
      const node = q.shift();
      levelNodes.push(node);
      values.push(node.val);
    }

    if (level % 2) {
      values.reverse();
      for (let i = 0; i < values.length; i++) {
        levelNodes[i].val = values[i];
      }
    }

    for (const node of levelNodes) {
      if (!node.left) break;
      q.push(node.left, node.right);
    }

    level += 1;
  }

  return root;
};
