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

function levelOrderBottom(root) {
    let ar = [];
    dfs(root, 0, ar);
    return ar.reverse();
};
function dfs(node, n, ar) {
    if(node == null) return;
    if (node.left == null && node.right == null) {
        if (!ar[n]) {
            ar[n] = [];
        }
        ar[n].push(node.val);
        return;
    }
    if (!ar[n]) {
        ar[n] = [];
    }
    ar[n].push(node.val);
    dfs(node.left, n + 1, ar);
    dfs(node.right, n + 1, ar);
}