//https://leetcode.com/problems/invert-binary-tree/
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
 *
 * Invert a binary tree.

Example:

Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9
Output:

     4
   /   \
  7     2
 / \   / \
9   6 3   1

 */
var invertTree = function(root) {

  let queue = [root];
  while (queue.length) {
    let n = queue.shift();
    if (n) {
      [n.left, n.right] = [n.right, n.left];
      queue.push([n.left, n.right])
    }
  }
  return root;
};

// recap