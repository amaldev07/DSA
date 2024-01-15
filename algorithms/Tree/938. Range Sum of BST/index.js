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

function rangeSumBST(root, low, high) {
    return dfs(root, low, high);
};
function dfs(node, low, high) {
    if (node == null) return 0;
    let l = dfs(node.left, low, high);
    let r = dfs(node.right, low, high);
    if (node.val >= low && node.val <= high) {
        return l + r + node.val;
    } else {
        return l + r + 0;
    }
}