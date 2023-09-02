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
    let out = [0];
    dfs(root, targetSum, out);
    return out[0];
};
function dfs(node, targetSum, out) {
    if (node == null) return { ls: 0, rs: 0 };
    let l = { ls: 0, rs: 0 };
    let r = { ls: 0, rs: 0 };
    if (node.left) l = dfs(node.left, targetSum, out);
    if (node.right) r = dfs(node.right, targetSum, out);
    let ls = l.ls + node.val;
    let rs = l.ls + node.val;
    if (ls == targetSum) out[0] = out[0] + 1;
    if (rs == targetSum) out[0] = out[0] + 1;
    return { ls, rs };
}