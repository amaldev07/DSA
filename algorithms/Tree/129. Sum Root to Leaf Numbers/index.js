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

function sumNumbers(root) {
    let result = { sum: 0 };
    let indSum = '';
    dfs(root, indSum, result);
    return result.sum;
};
function dfs(node, indSum, result) {
    if (node && node.left == null && node.right == null) {
        indSum = indSum + node.val;
        result.sum = result.sum + (+indSum);
        return +indSum;
    }
    indSum = indSum + node.val;
    if (node.left) dfs(node.left, indSum, result);
    if (node.right) dfs(node.right, indSum, result);
}