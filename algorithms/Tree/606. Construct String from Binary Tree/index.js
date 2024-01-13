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

function tree2str(root) {
    let s = '';
    s = dfs(root)
    return s;
};

function dfs(node) {
    if (node == null) return '';
    if (node && node.left == null && node.right == null) {
        return `${node.val}`;
    }
    let l = '()';
    let r = '';
    if (node.left) l = `(${dfs(node.left)})`;
    if (node.right) r = `(${dfs(node.right)})`;
    return `${node.val}${l}${r}`;
}