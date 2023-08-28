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

function findSecondMinimumValue(root) {
    return bfs(root);
};
function bfs(node) {
    if (node == null) return -1;
    if (node.left == null && node.right == null) return -1;
    let l = node.left.val;
    let r = node.right.val;
    if (node.val == l) l = bfs(node.left); // go to left and find 
    if (node.val == r) r = bfs(node.right);
    if (l != -1 && r != -1) {
        return Math.min(l, r)
    } else if (l == -1) {
        return r;
    } else {
        return l;
    }
}