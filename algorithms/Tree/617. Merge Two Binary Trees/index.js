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

function mergeTrees(root1, root2) {
    dfs(root1, root2);
    return root1;
};
function dfs(root1, root2) {
    if (root1 == null) return root2;
    if (root2 == null) return root1;
    root1.val = root1.val + root2.val;
    mergeTrees(root1.left, root2.left);
    mergeTrees(root1.right, root2.right);
}