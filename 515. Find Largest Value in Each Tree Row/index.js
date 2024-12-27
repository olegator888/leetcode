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
 * @return {number[]}
 */
var largestValues = function (root) {
  if (!root) return [];
  const res = [];
  const q = [root];
  while (q.length > 0) {
    const size = q.length;
    let maxVal = -Infinity;
    for (let i = 0; i < size; i++) {
      const node = q.shift();
      maxVal = Math.max(maxVal, node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(maxVal);
  }

  return res;
};
