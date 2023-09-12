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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
    return dfs(root, p, q);
};
function dfs(node, p, q) {
    if (node == null) return null;
    if (node == p || node == q) return node;
    let l = dfs(node.left, p, q);
    let r = dfs(node.right, p, q);
    if (l == null) {
        return r;
    } else if (r == null) {
        return l;
    } else {
        return node;
    }
}