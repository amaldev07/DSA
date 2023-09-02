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

function findBottomLeftValue(root) {
    let maxInd = [0];
    let max = [root.val];
    dfs(root, true, 0, maxInd, max);
    return max[0];
};
function dfs(node, isLeft, i, maxInd, max) {
    if (node.left == null && node.right == null) {
        if (isLeft) {
            if (i > maxInd[0]) {
                maxInd[0] = i;
                max[0] = node.val;
            }
        }
    }
    if (node.left) dfs(node.left, true, i + 1, maxInd, max);
    if (node.right) dfs(node.right, (((node.left) == null) ? true : false), i + 1, maxInd, max);
}