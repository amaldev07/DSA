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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root) {
    dfs(root, [null])
};
function dfs(root, previous) {
    if (root == null) return;
    dfs(root.right, previous);
    dfs(root.left, previous);
    root.right = previous[0];
    root.left = null;
    previous[0] = root;
}