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

function pruneTree(root: TreeNode | null): TreeNode | null {
    let rootFlag = dfs(root);
    if (!rootFlag) return null;
    return root;
};
function dfs(node) {
    if (node == null) return false;
    let l = dfs(node.left);
    let r = dfs(node.right);
    if (!l) {
        node.left = null;
    }
    if (!r) {
        node.right = null;
    }
    return (node.val == 1) || l || r;
}