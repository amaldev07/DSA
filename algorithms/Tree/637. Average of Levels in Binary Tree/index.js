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

function averageOfLevels(root) {
    let ar = [];
    dfs(root, 0, ar);
    for (let i = 0; i < ar.length; i++) {
        ar[i] = (ar[i].reduce((accumulator, currentValue) => accumulator + currentValue, 0))/ar[i].length;
    }
    return ar;
};
function dfs(node, i, ar) {
    if (node == null) return;
    if (ar[i]) {
        ar[i].push(node.val);
    } else {
        ar[i] = [node.val];
    }
    dfs(node.left, i + 1, ar);
    dfs(node.right, i + 1, ar);
}