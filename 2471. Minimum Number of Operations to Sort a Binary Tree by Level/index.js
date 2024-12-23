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
 * @return {number}
 */
var minimumOperations = function (root) {
  const countSwaps = (nums) => {
    let swaps = 0;
    const idxMap = {};
    for (let i = 0; i < nums.length; i++) {
      idxMap[nums[i]] = i;
    }

    const sortedNums = [...nums].sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== sortedNums[i]) {
        swaps += 1;
        const j = idxMap[sortedNums[i]];
        [nums[i], nums[j]] = [nums[j], nums[i]];
        idxMap[nums[j]] = j;
      }
    }

    return swaps;
  };

  let res = 0;
  const q = [root];

  while (q.length) {
    let len = q.length;
    const level = [];

    while (len) {
      const node = q.shift();
      level.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
      len--;
    }

    res += countSwaps(level);
  }

  return res;
};
