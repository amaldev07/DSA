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

function upsideDownBinaryTree(root: TreeNode | null): TreeNode | null {
    return dfs(root);
};
function dfs(node) {
    if (node == null) return null;
    if (node.left == null) return node;
    let newRoot = dfs(node.left); // this will return the last left node
    node.left.left = node.right;
    node.left.right = node;
    node.left = null;
    node.right = null;
    return newRoot;
}