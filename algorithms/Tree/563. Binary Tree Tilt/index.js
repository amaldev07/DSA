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

function findTilt(root) {
    dfs(root);
    return root;
};
function dfs(node) {
    if (root.left == null && root.right == null) {
        let val = node.val;
        node.val = 0;
        return val;
    }
    let l = dfs(node.left);
    let r = dfs(node.left);
    sum = l + r + node.val;
    node.val = Math.abs(l - r);
    return sum;
}
