/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
  const n = postorder.length;
  const postValToIdx = {};
  for (let i = 0; i < n; i++) {
    postValToIdx[postorder[i]] = i;
  }

  const build = (i1, i2, j1) => {
    if (i1 > i2) return null;
    const root = new TreeNode(preorder[i1]);
    if (i1 !== i2) {
      const leftVal = preorder[i1 + 1];
      const mid = postValToIdx[leftVal];
      const leftSize = mid - j1 + 1;
      root.left = build(i1 + 1, i1 + leftSize, j1);
      root.right = build(i1 + leftSize + 1, i2, mid + 1);
    }
    return root;
  };

  return build(0, n - 1, 0);
};
