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

function hasPathSum(root, targetSum) {
    return dfs(root, 0, targetSum);
};
function dfs(node, sum, targetSum) {
    if (node == null) return false;
    if (node && node.left == null && node.right == null) {
        sum = node.val + sum;
        return (sum == targetSum) ? true : false;
    }
    sum = sum + node.val;
    let l = false;
    let r = false;
    if (node.left) l = dfs(node.left, sum, targetSum);
    if (node.right) r = dfs(node.right, sum, targetSum);
    return l || r;
}