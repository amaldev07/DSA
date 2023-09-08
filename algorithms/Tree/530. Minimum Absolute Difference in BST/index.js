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

function getMinimumDifference(root: TreeNode | null): number {
    let g = { prev: Number.MAX_VALUE, min: Number.MAX_VALUE };
    dfs(root, g);
    return g.min;
};
function dfs(node, g) {
    if (node.left != null) dfs(node.left, g);
    g.min = Math.min(g.min, Math.abs(g.prev - node.val));
    g.prev = node.val;
    if (node.right != null) dfs(node.right, g);

}