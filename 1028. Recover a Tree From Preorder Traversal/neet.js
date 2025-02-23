/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
var recoverFromPreorder = function (traversal) {
  const stack = [];
  let dashes = 0;
  let i = 0;
  while (i < traversal.length) {
    if (traversal[i] === "-") {
      dashes++;
      i++;
      continue;
    }
    let j = i;
    while (j < traversal.length && traversal[j] !== "-") j++;
    const val = Number(traversal.slice(i, j));
    const node = new TreeNode(val);
    while (stack.length > dashes) stack.pop();
    if (stack.length > 0 && stack[stack.length - 1].left === null) {
      stack[stack.length - 1].left = node;
    } else if (stack.length > 0) {
      stack[stack.length - 1].right = node;
    }
    stack.push(node);
    dashes = 0;
    i = j;
  }
  return stack[0];
};
