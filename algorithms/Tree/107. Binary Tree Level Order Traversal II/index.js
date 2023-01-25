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
    let maxDepth = getMaxDepth(root);
    console.log("MaxDepth : -" + maxDepth);
    let ar = [];
    dfs(root, 0, maxDepth, ar);
    return ar;
};
function dfs(node, n, depth, ar) {
    if (node == null) return;
    if (node.left == null && node.right == null) {
        let i = depth - 1 - n;
        if (!ar[i]) {
            ar[i] = [];
        }
        ar[i].push(node.val);
        return;
    }
    let i = depth - 1 - n;
    if (!ar[i]) {
        ar[i] = [];
    }
    ar[i].push(node.val);
    dfs(node.left, n + 1, depth, ar);
    dfs(node.right, n + 1, depth, ar);
}
function getMaxDepth(node) {
    if (node == null) return 0;
    let l = getMaxDepth(node.left);
    let r = getMaxDepth(node.right);
    return (Math.max(l, r) + 1);
}