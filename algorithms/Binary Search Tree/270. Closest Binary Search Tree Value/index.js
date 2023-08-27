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

function closestValue(root, target) {
    return dfs(root, target, root.val);
};
function dfs(node, target, val) {
    if (node == null) return val;
    let v1 = Math.abs(node.val - target);
    let v2 = Math.abs(val - target);
    if (v1 == v2) { // If there are multiple answers, print the smallest.
        val = node.val < val ? node.val : val;
    } else {
        val = v1 < v2 ? node.val : val;
    }
    console.log(val)
    if (node.val > target) {
        return dfs(node.left, target, val);
    } else {
        return dfs(node.right, target, val);
    }
};