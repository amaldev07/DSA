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

function countNodes(root) {
    let el = [];
    dfs(root, el);
    return el.length;
};
function dfs(node, el) {
    if (node == null) {
        return;
    }
    el.push(node.val);
    dfs(node.left, el);
    dfs(node.right, el);
}