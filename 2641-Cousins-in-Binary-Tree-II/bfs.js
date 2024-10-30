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

  let q = [root];
  const levelSum = [];

  while (q.length > 0) {
    let curSum = 0;
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      curSum += node.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    levelSum.push(curSum);
  }

  q = [root];
  let level = 0;
  root.val = 0;
  while (q.length > 0) {
    const len = q.length;
    for (let i = 0; i < len; i++) {
      const node = q.shift();
      let siblingsSum = 0;
      if (node.left) siblingsSum += node.left.val;
      if (node.right) siblingsSum += node.right.val;
      if (node.left) {
        node.left.val = levelSum[level + 1] - siblingsSum;
        q.push(node.left);
      }
      if (node.right) {
        node.right.val = levelSum[level + 1] - siblingsSum;
        q.push(node.right);
      }
    }
    level++;
  }

  return root;
};
