/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function findTilt(root) {
    let n = root;
    dfs(root);
    console.log(root)
    console.log(n)
    return 1;
  };
  function dfs(node) {
    if (node.left == null && node.right == null) {
      let val = node.val;
      node.val = 0;
      return val;
    }
    let l = (node.left) ? dfs(node.left) : 0;
    let r = (node.right) ? dfs(node.right) : 0;
    let sum = l + r + node.val;
    node.val = Math.abs(l - r);
    return sum;
  }
  