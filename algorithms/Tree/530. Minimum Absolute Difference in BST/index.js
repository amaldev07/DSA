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

function getMinimumDifference(root: TreeNode | null): number {
    let min = [Number.MAX_VALUE];
    dfs(root, min);
    return min[0]
};
function dfs(node, min) {
    if (node == null) return;
    if (node.left == null && node.right == null) return;
    let l = Number.MAX_VALUE;;
    let r = Number.MAX_VALUE;;
    if (node.left) l = Math.abs(node.val - node.left.val);
    if (node.right) l = Math.abs(node.val - node.right.val);
    min[0] = Math.min(min[0], l, r);
    if (node.left) dfs(node.left, min);
    if (node.right) dfs(node.right, min);
}