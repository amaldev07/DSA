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

function pathSum(root, targetSum) {
    let ar = [];
    let out = [];
    dfs(root, 0, ar, out, targetSum);
    return out;
};
function dfs(node, sum, ar, out, targetSum) {
    if (node.left == null && node.right == null) {
        sum = node.val + sum;
        ar.push(node.val);
        if (sum == targetSum) {
            out.push(ar)
        }
    }
    sum = sum + node.val;
    sum = node.val + sum;
    ar.push(node.val);
    if (node.left) dfs(node.left, sum, ar, out, targetSum);
    if (node.right) dfs(node.right, sum, ar, out, targetSum);
}