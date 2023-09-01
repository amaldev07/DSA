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

function findMode(root) {
    let hm = new Map();
    let max = [root.val];
    dfs(root, hm, max);
    return max;
};
function dfs(node, hm, max) {
    if (node == null) return;
    if (hm.get(node.val)) {
        hm.set(node.val, hm.get(node.val) + 1);
    } else {
        hm.set(node.val, 1);
    }
    if (hm.get(max[0]) < hm.get(node.val)) {
        max[0] = node.val;
    }
    dfs(node.left, hm, max);
    dfs(node.right, hm, max);
};